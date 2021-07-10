
var sql = require('./mysqlconnect');

//code to fetch records

//Business Object

//in Javascript we can define object without class

var OrderObj = function(order)
{
    this.order_id=order.order_id;
    this.customer_id=order.customer_id;
    this.product_id=order.product_id;
    this.amount=order.amount;
    this.date=order.date;
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
OrderObj.insert = function (newOrder,result){
  
    sql.query("insert into orders set ?", [newOrder], function(err, res)
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


OrderObj.getAllData= function(result)
{
    sql.query('select * from orders',function(err,res)
    {
        if(err)
        {
            console.log("error:",err);
            result(null,err);
        }
        else
        {
            console.log('orders:',res);
            result(null,res);
        }
    });
};

OrderObj.getOneData = function(orderId,result)
{
    sql.query("select * from orders where order_id= ?", [orderId], function(err,res)
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

OrderObj.delOneData= function(orderId,result)
{
    sql.query("delete from orders where oredr_id= ? ",[orderId],function(err,res)
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


OrderObj.updateOneData= function(orderId,neworder,result)
{
    sql.query("update orders set ? where order_id= ? ",[neworder,orderId],function(err,res)
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

module.exports=OrderObj;

OrderObj.endConnect=function()
{
    sql.end();   
}

