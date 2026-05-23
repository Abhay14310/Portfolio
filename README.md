# Abhay Kapoor — Portfolio

A Clash of Clans themed developer portfolio built with vanilla HTML/CSS/JS + Three.js.

## 🚀 Deployment

The portfolio is deployed to Vercel (both frontend and contact form backend serverless function).

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` or `vercel --prod` to deploy.
3. Configure the following Environment Variables in your Vercel Project Dashboard (Settings > Environment Variables):
   * `MONGO_URI`: Your MongoDB Atlas connection string (to store contact submissions).
   * `EMAIL_USER`: Your Gmail address (to send notifications).
   * `EMAIL_PASS`: Your Gmail App Password (generated in Google Account settings).
   * `EMAIL_TO`: The email address where you want to receive submissions.

## 📄 Resume PDF
Replace the `#` in the Download PDF button in `index.html` with your actual hosted PDF link.
(Google Drive → Share → Anyone with link → Copy link)
