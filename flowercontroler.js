
var FlowerObj = require('./dal');

exports.filesend = function(req, res){
    
    res.sendFile(__dirname+'/public/catalogue.html');
}

exports.getAll = function (req, res) {
    FlowerObj.getAllData(function (err, flower) {
        if (err)
            res.send(err);
        res.send(flower);
    });
};

exports.pageinsert = function (req, res){
    console.log("mi aloy");
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

exports.remove = function (req, res) {
    FlowerObj.delOneData(req.params.id, function (err, flower) {
        if (err)
            res.send(err);
        res.json({ message : "Flower deleted successfully"});
    });
};