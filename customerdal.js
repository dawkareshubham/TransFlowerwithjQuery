
var sql = require('./mysqlconnect');

//code to fetch records

//Business Object

//in Javascript we can define object without class

var customerObj = function(customer)
{
    this.id=customer.id;  //attribute
    this.first_name=customer.first_name;
    this.last_name=customer.last_name;
    this.phone=customer.phone;
    this.email=customer.email;
    this.username=customer.username;
    this.password=customer.password;
}

/*
FlowerObj.insertData= function(id,name,des,price,quant,image)
{
    sql.query('insert into flowers values('+id+',"'+name+'","'+des+'",'+price+','+quant+',"'+image+'")',
    function(err,result,fields)
    {
        if(err) throw err;
        console.log(result);
    });
}
*/
customerObj.insert = function (newCustomer,result){
  
    sql.query("insert into customers set ?",newCustomer, function(err, res)
    {
      if(err)
      {
          console.log("error:",err);
          result(err,null);
      }
      else
      {
        console.log(res.insertId);
        result(null,res.insertId);
      }
    }
  );
};


customerObj.getAllData= function(result)
{
    sql.query('select * from customers',function(err,res)
    {
        if(err)
        {
            console.log("error:",err);
            result(null,err);
        }
        else
        {
            console.log('Customers:',res);
            result(null,res);
        }
    });
};

customerObj.getOneData = function(customerId,result)
{
    sql.query("select * from customers where id= ? ",[customerId], function(err,res)
    {
        if(err)
        {
            console.log("error:",err);
            result(err,null);
        }
        else
        {
            result(null,res);
        }
    });
};

customerObj.delOneData= function(customerId,result)
{
    sql.query("delete from customers where id= ? ",[customerId],function(err,res)
    {
        if(err) 
        {
            console.log("error:",err);
            result(null,err);
        }
        else
        {
            result(null,res);
        }
    });
};


customerObj.updateOneData= function(customerId,newCustomer,result)
{
    sql.query("update customers set ? where id= ? ",[newCustomer,customerId],function(err,res)
    {
        if(err)
        {
            console.log("error:",err)
            result(null,err);
        } 
        else
        {
            result(null,res);
        }
    });
};

// FlowerObj.updateOneData= function(flowerId,field,update,result)
// {
//     sql.query("update flowers set ? = ? where id= ? ",[field,update,flowerId],function(err,res)
//     {
//         if(err)
//         {
//             console.log("error:",err)
//             result(null,err);
//         } 
//         else
//         {
//             result(null,res);
//         }
//     });
// };

module.exports=customerObj;

customerObj.endConnect=function()
{
    sql.end();   
}
//insertData(21,'butterfly_pea','worship',100,900,'ButterflyPea.jpg');
//getAllData();
//updateOneData(21,'unitprice',120);
//updateOneData(21,'image','./public/images/ButterflyPea.jpg')
// getOneData(20);
// delOneData(21);
