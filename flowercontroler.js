
var FlowerObj = require('./dal');

//Controllers for Web Pages:

exports.sendHome = function(req,res){
    res.sendFile(__dirname+'/public/home.html')
}

exports.sendAboutUs = function(req,res){
    res.sendFile(__dirname+'/public/aboutus.html')
}

exports.sendContact = function(req,res){
    res.sendFile(__dirname+'/public/contact.html')
}

exports.sendCareers = function(req,res){
    res.sendFile(__dirname+'/public/careers.html')
}

exports.sendLogin = function(req,res){
    res.sendFile(__dirname+'/public/login.html')
}

exports.sendRegister = function(req,res){
    res.sendFile(__dirname+'/public/register.html')
}


exports.sendCatalogue = function(req, res){
    
    res.sendFile(__dirname+'/public/catalogue.html');
}

exports.sendCart = function(req, res){
    
    res.sendFile(__dirname+'/public/cart.html');
}

exports.sendPayment = function(req, res){
    
    res.sendFile(__dirname+'/public/payment.html');
}

exports.sendFeedback = function(req, res){
    
    res.sendFile(__dirname+'/public/feedback.html');
}

exports.sendAdmin = function(req, res){
    
    res.sendFile(__dirname+'/public/admin.html');
}





//Password Validation:
exports.passValidation = function(req,res){
    var claim=req.body;
    if(claim.username == "user" && claim.password == "1234")
    {
        res.sendFile(__dirname+"/public/order.html");
    }
    else
    {
        res.send("Invalid User");
    }
}

exports.adminValidation = function(req,res){
    var claim=req.body;
    if(claim.username == "Admin" && claim.password == "12345678")
    {
        res.sendFile(__dirname+"/public/insert.html");
    }
    else
    {
        res.send("Invalid Admin");
    }
}



//   CRUD OPEARTIONS:
exports.getAll = function (req, res) {
    FlowerObj.getAllData(function (err, flower) {
        if (err)
            res.send(err);
        res.send(flower);
    });
};

exports.pageinsert = function (req, res){
    res.sendFile(__dirname+"/public/insert.html");
}
exports.datafromweb = function (req, res){
    var ins_flower = req.body;
    console.log(ins_flower);
}


exports.insert = function(req, res){

    var new_flower = new FlowerObj(req.body);

    // Handles null error
    if(!new_flower.flowername || !new_flower.unitprice || !new_flower.quantity){
        res.status(400).send({ error : true, message : 'Please provide flowername/unitprice/quantity'})
    }
    else{
        FlowerObj.insert(new_flower, function(err, flower){
            if(err)
            res.send(err);
            res.json(flower);
        })
    }
}

exports.removeFlower= function(req,res){
    console.log(req.body);
    let flowerName= req.body.Name;
    FlowerObj.delFlower(flowerName, function (err, flower) {
        if (err)
            res.send(err);
        res.json({ message : "Flower deleted successfully"});
    });
}


exports.getBy = function (req, res) {
    FlowerObj.getOneData(req.params.id,function (err, flower) {
        if (err)
            res.send(err);
        
            res.send(flower);
    });
};

exports.update = function (req, res) {
    FlowerObj.updateOneData( new FlowerObj(req.body), req.params.id, function (err, flower) {
        if (err)
            res.send(err);
        res.json(flower);
    });
};


exports.updateFlower= function(req,res){
    FlowerObj.updateOneFlower( new FlowerObj(req.body) , function (err, flower) {
        if (err)
            res.send(err);
        res.json(flower);
    });
}

exports.remove = function (req, res) {
    FlowerObj.delOneData(req.params.id, function (err, flower) {
        if (err)
            res.send(err);
        res.json({ message : "Flower deleted successfully"});
    });
};