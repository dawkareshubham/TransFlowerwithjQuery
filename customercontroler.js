
var CustomerObj = require('./customerdal');

exports.getAll = function (req, res) {
    CustomerObj.getAllData(function (err, customer) {
        if (err)
            res.send(err);
        res.send(customer);
    });
};

exports.insert = function(req, res){

    var new_customer = new CustomerObj(req.body);

    // Handles null error
    // if(!new_flower.flowername || ( !new_flower.unitprice || !new_flower.quantity)){
    //     res.status(400).send({ error : true, message : 'Please provide flowername/unitprice/quantity'})
    // }
    // else{
        CustomerObj.insert(new_customer, function(err, customer){
            if(err)
            res.send(err);
            res.json(customer);
        }
    )
    }
//}

exports.getBy = function (req, res) {
    CustomerObj.getOneData(req.params.id,function (err, customer) {
        if (err)
            res.send(err);
        res.json(customer);
    });
};

exports.update = function (req, res) {
    CustomerObj.updateOneData(req.params.id, new CustomerObj(req.body), function (err, customer) {
        if (err)
            res.send(err);
        res.json(customer);
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
    CustomerObj.delOneData(req.params.id, function (err, customer) {
        if (err)
            res.send(err);
        res.json({ message : "Flower deleted successfully"});
    });
};