var flowercontroller = require("./flowercontroler");
var customercontroller = require("./customercontroler")
var ordercontroller = require("./ordercontroler");


module.exports = function(app)
{
    //mapping code for different HTTP Requests
    app.route("/getflowers")
        .get(flowercontroller.filesend)
        
    app.route("/flowers/insert")
        .get(flowercontroller.pageinsert)
        .post(flowercontroller.insert)
    

    app.route("/flowers")
        .get(flowercontroller.getAll)
        .post(flowercontroller.insert);

    app.route('/flowers/:id')
        .get(flowercontroller.getBy)
        .put(flowercontroller.update)
        .delete(flowercontroller.remove);


        app.route("/customers")
        .get(customercontroller.getAll)
        .post(customercontroller.insert);

    app.route('/customers/:id')
        .get(customercontroller.getBy)
        .put(customercontroller.update)
        .delete(customercontroller.remove);

       
    app.route("/orders")
        .get(ordercontroller.getAll)
        .post(ordercontroller.insert);

    app.route('/orders/:id')
        .get(ordercontroller.getBy)
        .put(ordercontroller.update)
        .delete(ordercontroller.remove);
        
}






