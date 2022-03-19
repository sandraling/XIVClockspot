import { MongoClient } from 'mongodb'
import mongoose from "mongoose";

let uri = process.env.MONGODB_URI
let dbName = process.env.MONGODB_DB

let cachedConn = null

if (!uri) {
  throw new Error(
    'Missing MONGODB_URI environment variable inside .env.local'
  )
}

if (!dbName) {
  throw new Error(
    'Missing MONGODB_DB environment variable inside .env.local'
  )
}

export async function connectToDB() {
  if (cachedConn) {
    return cachedConn;
  }

  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedConn = conn
  
  return conn;
}