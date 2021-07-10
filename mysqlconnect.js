// database

var mysql = require('mysql');


var connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "shubham",
    database: "task"
});

connection.connect(function(err){

    if(err)
    
        throw err;

    console.log("connected");
})

module.exports = connection;

// connection.end((err)=>{

//     if (err)
//     console.log("error");
//   })