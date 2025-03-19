// npm install mongodb mongoose

import mongoose from "mongoose"

let connected = false
const connectDB = async () => {
	mongoose.set("strictQuery", true) // ensure only specified fields are saved to the database

	// If database is already connected, don't connect again
	if (connected) {
		console.log("Database is already connected")
		return
	}

	// Connect to MongoDB

	try {
		await mongoose.connect(process.env.MONGODB_URI)
		connected = true

		console.log("Database connected")
	} catch (error) {
		console.error("Error connecting to database: ", error)
	}
}

export default connectDB
