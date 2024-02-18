// pages/api/register.js
import connectDB from '../db.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectDB();

    const { username, password } = req.body;

    try {
      // رمزنگاری رمز عبور
      const hashedPassword = await bcrypt.hash(password, 10);

      // ذخیره کاربر در دیتابیس
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
