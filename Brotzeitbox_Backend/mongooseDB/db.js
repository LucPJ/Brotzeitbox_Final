import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

mongoose.set("strictQuery", false) 

try {
    const mongooseDB = process.env.MONGO_DB_CONNECTION
    const client = await mongoose.connect(mongooseDB);
 
    console.log(`connected to ${client.connection.host}`);
}catch(err){
    console.log(err)
}

const db = mongoose.connection;
export default db;