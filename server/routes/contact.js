const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');
const Message    = require('../models/Message');

router.post('/', async (req,res)=>{
  const {name,email,subject,message} = req.body;
  if(!name||!email||!subject||!message)
    return res.status(400).json({success:false,message:'All fields required.'});
  try{
    const msg = await Message.create({name,email,subject,message});
    const t = nodemailer.createTransport({service:'gmail',
      auth:{user:process.env.EMAIL_USER,pass:process.env.EMAIL_PASS}});
    await t.sendMail({
      from:`"Portfolio" <${process.env.EMAIL_USER}>`,
      to:process.env.EMAIL_TO,
      subject:`[Portfolio] ${subject} — from ${name}`,
      html:`<div style="font-family:sans-serif;background:#060810;color:#f0ece4;padding:2rem;border-radius:6px;max-width:600px">
        <h2 style="color:#e8873a">📬 New Message</h2>
        <p><b>From:</b> ${name} (${email})</p>
        <p><b>Subject:</b> ${subject}</p>
        <div style="background:#0b0e1a;padding:1rem;margin-top:1rem;border-left:3px solid #e8873a">
          <p style="margin:0">${message.replace(/\n/g,'<br>')}</p>
        </div>
        <p style="color:#666;font-size:.75rem;margin-top:1rem">${new Date().toLocaleString()}</p>
      </div>`
    });
    res.status(201).json({success:true,id:msg._id});
  }catch(e){
    console.error(e.message);
    res.status(500).json({success:false,message:'Failed. Try again later.'});
  }
});
module.exports = router;
