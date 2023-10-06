const { orderService } = require("../services");

/** create order */
const createOrder = async (req, res) => {
  try {
    const reqBody = req.body;

    const order = await orderService.createOrder(reqBody);
    if (!order) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "order create successfully!",
      data: { order },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get order list */
const getOrderList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { order_name: { $regex: search, $options: "i" } },
        { order_desc: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await orderService.getOrderList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Order list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete order */
const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    console.log(orderId);
    const orderExists = await orderService.deleteOrder(orderId);
    if (!orderExists) {
      throw new Error("order not found!");
    }

    await orderService.deleteOrder(orderId);

    res.status(200).json({
      success: true,
      message: "order delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update order details */
const updateOrderDetails = async (req, res) => {
  try{
   const orderId=req.params.orderId
   const orderExists=await orderService.updateOrderDetails(orderId)
   if(!orderExists){
     throw new Error("order not found");
   }
   await orderService.updateOrderDetails(orderId,req.body)
   res.status(200).json({
     success:true,
     message:"Order details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 module.exports = {
   createOrder,
   getOrderList,
   deleteOrder,
   updateOrderDetails
 };
