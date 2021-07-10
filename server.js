const express = require("express");
const app = express();
var path=require('path');
//configuration:
const publicPath=path.join(__dirname,'/public')
app.use(express.static(publicPath));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var routes = require('./router');
routes(app);

var server =app.listen(9000,function()
{
    var host = server.address().address  
    var port = server.address().port
    console.log("Server listening to http://%s:%s",host,port);
});



