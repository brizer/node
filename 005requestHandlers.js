var exec = require("child_process").exec;//非阻塞操作模块
var querystring=require("querystring");//获取post数据中指定部分的模块

function start(response,postData) {
  console.log("Request handler 'start' was called.");
  //post表单示例：
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();    
  
  //非阻塞操作示例：
//exec("dir -lah", function (error, stdout, stderr) {//ls -lah 是linux下的命令，在window下不可避免的会出现问题。所以换成dir
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write(stdout);
//  response.end();
//});
}

function upload(response,postData) {//windows平台可以通过该方法来测试程序运行的正确性
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You hava sent:"+
  //postData
  //这里我们只对post数据中的text感兴趣
  querystring.parse(postData).text
  );
  response.end();
}

exports.start = start;
exports.upload = upload;