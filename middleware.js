// This middleware is used to protect the routes that require authentication
// and redirect the user to the login page if they are not authenticated.
// It is a server-side middleware that runs before the request is processed.
// The middleware checks if the user is authenticated by checking the session.
// If the user is not authenticated, it redirects them to the login page.
// The middleware is used to protect the following routes:

// It uses NextAuth.js to check the authentication status of the user.
// The matcher property specifies the routes that require authentication.

export { default } from "next-auth/middleware"

export const config = {
	matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
}
