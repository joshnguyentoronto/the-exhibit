import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const URI = process.env.DATABASE_URL


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {conn:null, promise:null}
}

const dbconnect = async () => {
  if (cached.conn) {
    return cached.conn
  }
  let opts;
  if (!cached.promise) {
    opts = {
      bufferCommand: false,
      bufferMaxEntries: 0,
    }
  }
  await mongoose.createConnection(URI).asPromise();
  
  cached.promise =  mongoose.connect(URI).then((mongoose) => {
    return mongoose
  })
  
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }
}

export default dbconnect


// import { MongoClient } from 'mongodb'
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }
// let client
// let clientPromise

// if (!process.env.DATABASE_URL) {
//   throw new Error('Add Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') {
// // Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(URI, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   client = new MongoClient(URI, options)
//   clientPromise = client.connect()
// }

// export default clientPromise
