import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/user.js';
import registerRoutes from './routes/registerRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/user', userRoutes);
app.use('/register', registerRoutes);


app.get('/', (req, res) => {
  res.send('Hello from uvMart API!');
});

let isConnected = false;

async function connectToDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

const PORT = process.env.PORT || 5000;

// connectToDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });
// });


// Vercel expects a default handler export
export default async function handler(req, res) {
    await connectToDB();
    app(req, res); // Use Express to handle the request
}