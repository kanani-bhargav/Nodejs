const express=require('express')
const { userController }=require('../../controllers')
const { userValidation }=require('../../validations')
const validate = require('../../middlewares/validate')

const router=express.Router()

router.post('/create-user',validate(userValidation.createUser),userController.createUser)
router.get('/list-user',userController.getUserList)
router.delete('/delete-user/:userId',userController.deleteUser)
router.put('/update-user/:userId',userController.updateUser)

module.exports=router