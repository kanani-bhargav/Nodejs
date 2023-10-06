const express=require('express')

const router=express.Router()

const userRoute=require('./user.route')
const tokenRoute=require('./token.route')
const bannerRoute=require('./banner.route')

router.use('/user',userRoute)
router.use('/token',tokenRoute)
router.use('/banner',bannerRoute)

module.exports=router