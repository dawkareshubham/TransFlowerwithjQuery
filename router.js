var flowercontroller = require("./flowercontroler");
var customercontroller = require("./customercontroler")
var ordercontroller = require("./ordercontroler");


module.exports = function(app)
{
    //mapping code for different HTTP Requests
    app.route("/getflowers")
        .get(flowercontroller.sendCatalogue)
    
    app.route("/flowers/delete")
        .post(flowercontroller.removeFlower)
    
    app.route("/flowers/update")
        .post(flowercontroller.updateFlower)

    app.route("/flowers/insert")
        .get(flowercontroller.pageinsert)
        .post(flowercontroller.insert)


    //CRUD for Testing in POSTMAN tool
    
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
        
    //Handlers for HTTP requests of pages

    app.route('/' || '/home')
        .get(flowercontroller.sendHome)

    app.route('/aboutus')
        .get(flowercontroller.sendAboutUs)

    app.route('/contact')
        .get(flowercontroller.sendContact)

    app.route('/careers')
        .get(flowercontroller.sendCareers)

    app.route('/login')
        .get(flowercontroller.sendLogin)

    app.route('/register')
        .get(flowercontroller.sendRegister)

    app.route('/api/cart')
        .get(flowercontroller.sendCart)

    app.route('/api/payment')
        .get(flowercontroller.sendPayment)

    app.route('/feedback')
        .get(flowercontroller.sendFeedback)




//Route for pass validation
    app.route('/api/login')
        .post(flowercontroller.passValidation)

    app.route('/api/adminlogin')
        .post(flowercontroller.adminValidation)


    }






