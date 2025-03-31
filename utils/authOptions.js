import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
	callbacks: {
		// Invoked on successful sign-in
		async signIn({ profile }) {
			// 1. connect to db
			// 2 check if user exists
			// 3. if not, create a new user in db
			// 4. return true or false
		},
	},
	// modifies the session object
	async session({ session }) {
		// 1. get user from db
		// 2. assign userid to the session
		// 3. return session
	},
}
