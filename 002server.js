var http=require("http");//请求node.js自带的http模块
var	url=require("url");
//将服务器脚本放到start函数中，然后导出该函数
function start(route,handle){//将路由作为参数传递进去
	http.createServer(function(request,response){
			var postData="";
			var pathname=url.parse(request.url).pathname;//获取路径名："//foo/bar"中的"/bar"
			console.log("Request for"+ pathname+ " received,");
			
			request.setEncoding("utf8");
			
			request.addListener("data",function(postDataChunk){//注册监听事件，用于收集每次接收到的新数据块并赋值给postData变量
				postData+=postDataChunk;
				console.log("Received POST data chunk '"+postDataChunk+" '.");
			});
			
			request.addListener("end",function(){//将所有路由调用移到end事件处理程序中
				route(handle,pathname,response,postData);
			});
			
			//route(handle,pathname,response);
			//将所有与response有关的操作都放到route中去完成
//			response.writeHead(200,{"Content-Type":"text/plain"});//响应头
//			response.write("Hello World");//文本内容
//			response.end();//完成响应
		}).listen(8888);//监听的端口号
		
	console.log("Server has started.");
		
	}
//导出该函数
exports.start=start;