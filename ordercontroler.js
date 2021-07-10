
var OrderObj = require('./orderdal');

exports.getAll = function (req, res) {
    OrderObj.getAllData(function (err, order) {
        if (err)
            res.send(err);
        res.send(order);
    });
};

exports.insert = function(req, res){

    var new_order = new OrderObj(req.body);

    // Handles null error
    // if(!new_flower.flowername || ( !new_flower.unitprice || !new_flower.quantity)){
    //     res.status(400).send({ error : true, message : 'Please provide flowername/unitprice/quantity'})
    // }
    // else{
        OrderObj.insert(new_order, function(err, order){
            if(err)
            res.send(err);
            res.json(order);
        }
    )
    }
//}




exports.getBy = function (req, res) {
    OrderObj.getOneData(req.params.id, function (err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};

exports.update = function (req, res) {
    OrderObj.updateOneData(req.params.id, new OrderObj(req.body), function (err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};

// exports.update = function (req, res) {
//     FlowerObj.updateOneData(req.params.id, req.params.field,req.params.update, function (err, customer) {
//         if (err)
//             res.send(err);
//         res.json(customer);
//     });
// };

exports.remove = function (req, res) {
    OrderObj.delOneData(req.params.id, function (err, order) {
        if (err)
            res.send(err);
        res.json({ message : "Flower deleted successfully"});
    });
};