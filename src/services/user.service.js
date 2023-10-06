const {User}=require('../models')

const createUser=async(reqBody)=>{
    return await User.create(reqBody)
}
const getUser=async(userId)=>{
    return await User.findById(userId)
}
const getUserList=async()=>{
    return await User.find()
}
const deleteUser=async(userId)=>{
    return await User.findByIdAndDelete(userId)
}
const updateUser=async(userId,updateBody)=>{
    return await User.findByIdAndUpdate(userId,{$set:updateBody})
}

module.exports={
    createUser,
    getUser,
    getUserList,
    deleteUser,
    updateUser
}