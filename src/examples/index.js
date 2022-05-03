import http from "http";
import xypress from "../app.js";
let app = xypress();
app.post("/index", function(request, response){
    console.log("SHIT, IM WORKING!");
    return {"data": "Hello world!", "shit": "NO!"};
});
app.get("/", function(request, response){
    return "You shall not pass!!!";
});
app.configureNotFound(function(request, response){
    response.write("SORRY, WE CAN'T FIND ANYTHING!");
    response.end();
})
console.log(app.router.routes.post);
let server = http.createServer(function(request, response){
    app.handle(request, response);
});
server.listen(8080);