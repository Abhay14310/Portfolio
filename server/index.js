const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');
const helmet    = require('helmet');
const dotenv    = require('dotenv');
const path      = require('path');
const rateLimit = require('express-rate-limit');
dotenv.config();

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000', methods:['GET','POST','PATCH','DELETE'] }));
app.use(express.json());
app.use('/api/', rateLimit({ windowMs:15*60*1000, max:30,
  message:{success:false,message:'Too many requests.'} }));

app.use('/api/contact',  require('./routes/contact'));
app.use('/api/messages', require('./routes/messages'));
app.get('/api/health', (_,res)=>res.json({status:'OK',time:new Date()}));

// Serve React in production
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,'../client/build')));
  app.get('*',(_,res)=>res.sendFile(path.join(__dirname,'../client/build/index.html')));
}

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    const PORT=process.env.PORT||5000;
    app.listen(PORT,()=>console.log(`🚀 Server on :${PORT}`));
    console.log('✅ MongoDB connected');
  })
  .catch(e=>{console.error('❌ MongoDB error:',e.message);process.exit(1)});
