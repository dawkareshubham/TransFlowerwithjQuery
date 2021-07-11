
var sql = require('./mysqlconnect');

//code to fetch records

//Business Object

//in Javascript we can define object without class

var FlowerObj = function(flower)
{
    this.id=flower.id;  //attribute
    this.flowername=flower.flowername;
    this.description=flower.description;
    this.unitprice=flower.unitprice;
    this.quantity=flower.quantity;
    this.image=flower.image;

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
FlowerObj.insert = function (newFlower,result){
  
    sql.query("insert into flowers set ?",newFlower, function(err, res)
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


FlowerObj.getAllData= function(result)
{
    sql.query('select * from flowers',function(err,res)
    {
        if(err)
        {
            console.log("error:",err);
            result(null,err);
        }
        else
        {
            console.log('Flowers:',res);
            result(null,res);
        }
    });
};

FlowerObj.getOneData = function(flowerId,result)
{
    sql.query("select * from flowers where id= ?", [flowerId], function(err,res)
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

FlowerObj.delOneData= function(flowerId,result)
{
    sql.query("delete from flowers where id= ? ",[flowerId],function(err,res)
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

FlowerObj.delFlower=function(flowerName,result)
{
    console.log("From DAL:"+flowerName);
    sql.query("delete from flowers where flowername= ? ",[flowerName],function(err,res)
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

}

//Update my Name:
FlowerObj.updateOneFlower= function(new_flower, result)
{
    sql.query("update flowers set ? where flowername= ? ", [new_flower, new_flower.flowername],function(err,res)
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

FlowerObj.updateOneData= function(new_flower,flowerId, result)
{
    sql.query("update flowers set ? where id= ? ", [new_flower, flowerId],function(err,res)
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

module.exports=FlowerObj;

FlowerObj.endConnect=function()
{
    sql.end();   
}
//insertData(21,'butterfly_pea','worship',100,900,'ButterflyPea.jpg');
//getAllData();
//updateOneData(21,'unitprice',120);
//updateOneData(21,'image','./public/images/ButterflyPea.jpg')
// getOneData(20);
// delOneData(21);
