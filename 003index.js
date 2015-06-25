var server=require("./002server");//调用自定义模块
var router=require("./004router");
var requestHandlers=require("./005requestHandlers");

var handle={};//事件处理
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;

server.start(router.route,handle);
