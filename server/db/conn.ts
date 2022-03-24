import mongoose from "mongoose";
import { mongoURI } from "../config/keys";

mongoose.connect(mongoURI, {
	useNewUrlParser: true, 
	useUnifiedTopology: true
} as mongoose.ConnectOptions);

export const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));