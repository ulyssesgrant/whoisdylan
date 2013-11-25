var express=require("express");
var app = express();
app.use(express.static(__dirname + '/whoisdylan'));
var port = process.argv[2] || 80;
app.listen(port);
