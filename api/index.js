import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
<<<<<<< HEAD
import cookieParser from 'cookie-parser';
import path from 'path';
=======
import wishlistRouter from './routes/wishlist.route.js'
import contactLandlordRouter from './routes/contactLandlord.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve();

const app = express();


app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
<<<<<<< HEAD
=======
app.use('/api/wishlist', wishlistRouter)
app.use('/api/contactLandlord', contactLandlordRouter)
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});