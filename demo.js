var koa = require("koa");
var router = require('koa-router');

var app = koa();
app.use(router(app));


app.get('/', function *(next) {
	this.body = "这是root"
});
app.get('/detail/:id', function *(next) {
	//我是详情页面
	//:id 是路由通配规则，示例请求 /detail/123 就会进入该 generator function 逻辑
	var id = this.params.id; //123
	this.body = "这是详情页" +id;
});


app.listen(3000);
