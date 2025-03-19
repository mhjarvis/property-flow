import { Schema, model, models } from "mongoose"
import { unique } from "next/dist/build/utils"

const UserSchema = new Schema(
	{
		email: {
			type: String,
			unique: [true, "Email is already taken"],
			required: [true, "Email is required"],
		},
		username: {
			type: String,
			unique: [true, "Username is already taken"],
			required: [true, "Username is required"],
		},
		image: {
			type: String,
		},
		bookmarks: [
			{
				type: Schema.Types.ObjectId,
				ref: "Property",
			},
		],
	},
	{
		timestamps: true,
	}
)

const User = models.user || model("User", UserSchema)

export default User
