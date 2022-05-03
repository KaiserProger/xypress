import methods from "./methods.js";
let createRouter = function(){
    let router = {
        prefix: "",
        routes: {},
        setPrefix: function(prefix){
            this.prefix = prefix;
        },
        handle: function(url, method){
            let objectObject = this.routes[method.toLowerCase()];
            for(let i in objectObject){
                if(url == this.prefix + i){
                    return objectObject[i];
                }
            }
            return null;
        }
    };
    methods.forEach(function(method){
        method = method.toLowerCase();
        router.routes[method] = {}
        router[method] = function(pattern, handler){
            router.routes[method][pattern] = handler
        }
    })
    return router;
}
export default createRouter;