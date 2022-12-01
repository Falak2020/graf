const router=require('express').Router()
const graf =require('../modules/createChart')

router.get('/?',graf.createImage)

 

module.exports=router
