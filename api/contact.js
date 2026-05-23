const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) return cachedDb;
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not set');
  }
  const db = await mongoose.connect(process.env.MONGO_URI);
  cachedDb = db;
  return db;
}

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields required.' });
  }

  try {
    await connectToDatabase();
    
    // Save message to Database
    const msg = await Message.create({ name, email, subject, message });

    // Send Email notification
    const t = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await t.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `<div style="font-family:sans-serif;background:#060810;color:#f0ece4;padding:2rem;border-radius:6px;max-width:600px">
        <h2 style="color:#e8873a">📬 New Message</h2>
        <p><b>From:</b> ${name} (${email})</p>
        <p><b>Subject:</b> ${subject}</p>
        <div style="background:#0b0e1a;padding:1rem;margin-top:1rem;border-left:3px solid #e8873a">
          <p style="margin:0">${message.replace(/\n/g,'<br>')}</p>
        </div>
        <p style="color:#666;font-size:.75rem;margin-top:1rem">${new Date().toLocaleString()}</p>
      </div>`
    });

    return res.status(201).json({ success: true, id: msg._id });
  } catch (e) {
    console.error('API Error:', e.message);
    return res.status(500).json({ success: false, message: 'Failed to process request.' });
  }
};
