const { productService } = require("../services");

/** create product */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;

    const product = await productService.createProduct(reqBody);
    if (!product) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "product create successfully!",
      data: { product },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get product list */
const getProductList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { product_name: { $regex: search, $options: "i" } },
        { product_desc: { $regex: search, $options: "i" } },
        { product_price: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await productService.getProductList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Product list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete product */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log(productId);
    const productExists = await productService.deleteProduct(productId);
    if (!productExists) {
      throw new Error("product not found!");
    }

    await productService.deleteProduct(productId);

    res.status(200).json({
      success: true,
      message: "product delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update product details */
const updateProductDetails = async (req, res) => {
  try{
   const productId=req.params.productId
   const productExists=await productService.updateProductDetails(productId)
   if(!productExists){
     throw new Error("product not found");
   }
   await productService.updateProductDetails(productId,req.body)
   res.status(200).json({
     success:true,
     message:"Product details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 /** Get product details */
const getProductDetails = async (req, res) => {
  try {
    const productExists = await productService.getProductById(
      req.params.productId
    );
    if (!productExists) {
      throw new Error("Product not found!");
    }

    res.status(200).json({
      success: true,
      message: "Product details get successfully!",
      data: productExists,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};


 module.exports = {
   createProduct,
   getProductList,
   deleteProduct,
   updateProductDetails,
   getProductDetails
 };
