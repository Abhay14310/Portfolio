const express = require('express');
const router  = express.Router();
const Message = require('../models/Message');

router.get('/',    async(_,res)=>{try{const d=await Message.find().sort({createdAt:-1});res.json({success:true,count:d.length,data:d})}catch(e){res.status(500).json({success:false,message:e.message})}});
router.patch('/:id/read',async(req,res)=>{try{const d=await Message.findByIdAndUpdate(req.params.id,{read:true},{new:true});res.json({success:true,data:d})}catch(e){res.status(500).json({success:false,message:e.message})}});
router.delete('/:id',async(req,res)=>{try{await Message.findByIdAndDelete(req.params.id);res.json({success:true})}catch(e){res.status(500).json({success:false,message:e.message})}});

module.exports = router;
