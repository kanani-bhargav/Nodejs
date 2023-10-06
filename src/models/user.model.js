const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_firstname:{
        type:String,
        trim:true
    },
    user_lastname:{
        type:String,
        trim:true
    },
    user_email:{
        type:String,
        trim:true
    },
    user_password:{
        type:String,
        trim:true
    },
    user_address:{
        type:String,
        trim:true
    },
    is_active:{
        type:Boolean,
        default:true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const User = mongoose.model("user", userSchema);
module.exports = User;
