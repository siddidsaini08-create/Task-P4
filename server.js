import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const ownerEmail = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_APP_PASSWORD;

if (!ownerEmail || !gmailPassword) {
  console.warn('⚠️  GMAIL_USER or GMAIL_APP_PASSWORD is missing. Email sending will not work until .env is configured.');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ownerEmail,
    pass: gmailPassword
  }
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Backend is running' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all contact fields.' });
  }

  try {
    await transporter.sendMail({
      from: ownerEmail,
      to: ownerEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `New message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `
    });

    console.log(`✅ Contact email sent from ${ownerEmail} to ${ownerEmail} | Visitor: ${email}`);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Contact email failed:', error.message);
    res.status(500).json({ success: false, message: 'Could not send message. Check the backend/email settings.' });
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  try {
    // Notification to Siddid
    await transporter.sendMail({
      from: ownerEmail,
      to: ownerEmail,
      subject: 'New Portfolio Subscriber',
      text: `A new user subscribed to your portfolio updates.\n\nSubscriber: ${email}`
    });

    // Confirmation to the subscriber
    await transporter.sendMail({
      from: ownerEmail,
      to: email,
      subject: 'Thanks for subscribing to Siddid Saini',
      text: 'Thanks for subscribing! You will receive future updates from Siddid Saini.',
      html: '<h2>Thanks for subscribing!</h2><p>You are now subscribed to updates from Siddid Saini.</p>'
    });

    console.log(`✅ Subscription emails sent from ${ownerEmail} | Subscriber: ${email}`);
    res.json({ success: true, message: 'Subscribed successfully! Check your email for confirmation.' });
  } catch (error) {
    console.error('❌ Subscription email failed:', error.message);
    res.status(500).json({ success: false, message: 'Could not send subscription email. Check the backend/email settings.' });
  }
});

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
  console.log(`📧 Email sender configured as: ${ownerEmail || 'NOT CONFIGURED'}`);
});
