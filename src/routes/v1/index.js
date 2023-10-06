const express = require("express");

/*require routes*/
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const subCategoryRoute = require("./sub_category.route");
const subChildCategoryRoute = require("./sub_child_category.route");
const productRoute = require("./product.route");
const cartRoute = require("./cart.route");
const orderRoute = require("./order.route");
const paymentRoute = require("./payment.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/sub_category", subCategoryRoute);
router.use("/sub_child_category", subChildCategoryRoute);
router.use("/product", productRoute);
router.use("/cart", cartRoute);
router.use("/order", orderRoute);
router.use("/payment", paymentRoute);

module.exports = router;