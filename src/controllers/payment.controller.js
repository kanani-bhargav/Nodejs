const { paymentService } = require("../services");

/** create payment */
const createPayment = async (req, res) => {
  try {
    const reqBody = req.body;

    const payment = await paymentService.createPayment(reqBody);
    if (!payment) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "payment create successfully!",
      data: { payment },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get payment list */
const getPaymentList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { payment_name: { $regex: search, $options: "i" } },
        { payment_desc: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await paymentService.getPaymentList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Payment list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete payment */
const deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    console.log(paymentId);
    const paymentExists = await paymentService.deletePayment(paymentId);
    if (!paymentExists) {
      throw new Error("payment not found!");
    }

    await paymentService.deletePayment(paymentId);

    res.status(200).json({
      success: true,
      message: "payment delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update payment details */
const updatePaymentDetails = async (req, res) => {
  try{
   const paymentId=req.params.paymentId
   const paymentExists=await paymentService.updatePaymentDetails(paymentId)
   if(!paymentExists){
     throw new Error("payment not found");
   }
   await paymentService.updatePaymentDetails(paymentId,req.body)
   res.status(200).json({
     success:true,
     message:"Payment details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 module.exports = {
   createPayment,
   getPaymentList,
   deletePayment,
   updatePaymentDetails
 };
