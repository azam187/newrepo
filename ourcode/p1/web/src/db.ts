import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const {
  MONGO_DBNAME,
  MONGODB_URL
} = process.env;

let MONGO_URL = MONGODB_URL + MONGO_DBNAME;


// export const dbConnect = async () => {
//   try {
//     await mongoose.connect('mongodb://52.23.179.128:27017/');
//     console.log(`Connected successfully to ${MONGO_URL}`);
//   } catch (err) {
//     console.log('DB Connection Failed!');
//   }
// };


