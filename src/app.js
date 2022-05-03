import methods from "./methods.js";
import createRouter from "./router.js";

let xypress = function(){
    let app = function(){}
    app.notFound = function(request, response){
        response.statusCode = 404;
        response.end();
    }
    app.router = createRouter();
    methods.forEach(function(method){
        method = method.toLowerCase();
        app[method] = function(url, handler){
            app.router[method](url, handler)
        }
    })
    app.handle = function(request, response){
        request.method = request.method.toLowerCase();
        let handler = app.router.handle(request.url, request.method);
        if(handler && handler != null) response.end(JSON.stringify(handler(request, response)));
        else {
            app.notFound(request, response);
        }
    }
    app.configureNotFound = function(callback){
        app.notFound = callback;
    }
    return app;
}
export default xypress;