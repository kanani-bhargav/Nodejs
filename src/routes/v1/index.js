    const express = require("express");

    /*require routes*/
    const userRoute = require("./user.route");
    const categoryRoute = require("./category.route");
    const productRoute = require("./product.route.js");
    const bookRoute = require("./book.route");

    const groceryRoute =require('./grocery.route')
    const busRoute =require('./bus.route')
    const hotelRoute =require('./hotel.route')
    const travelRoute =require('./travel.route')
    const stationaryRoute =require('./stationary.route')
    const jewelleryRoute =require('./jewellery.route')
    const schoolRoute =require('./school.route')
    const movieRoute =require('./movie.route')
    const pharmacyRoute =require('./pharmacy.route')
    const musicRoute =require('./music.route')
    const ecomRoute =require('./ecom.route')
    const mobileRoute =require('./mobile.route')

    const router = express.Router();

    router.use("/user", userRoute);
    router.use("/category", categoryRoute);
    router.use("/product", productRoute);
    router.use("/book", bookRoute);
    router.use('/grocery',groceryRoute)
    router.use('/bus',busRoute)
    router.use('/hotel',hotelRoute)
    router.use('/travel',travelRoute)
    router.use('/stationary',stationaryRoute)
    router.use('/jewellery',jewelleryRoute)
    router.use('/school',schoolRoute)
    router.use('/movie',movieRoute)
    router.use('/pharmacy',pharmacyRoute)
    router.use('/music',musicRoute)
    router.use('/ecom',ecomRoute)
    router.use('/mobile',mobileRoute)

    module.exports = router;
