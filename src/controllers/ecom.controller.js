const { userService, categoryService, productService } = require("../services");

const getEcomList = async(req,res) => {
    try {
        const userList = await userService.getUserList();
        if(!userList){
          throw new Error("user data not found. ");
        }
        const categoryList = await categoryService.getCategoryList();
        if(!categoryList){
          throw new Error("Category data not found. ");
        }
        const productList = await productService.getProductList();
        if(!productList){
          throw new Error("Product data not found.");
        }
        res.status(200).json({
            success:true,
            message:"ecom data get successfully ",
            data: {userList,categoryList,productList}
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

module.exports = {
    getEcomList
}