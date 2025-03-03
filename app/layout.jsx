import "@/assets/styles/globals.css"

export const metadata = {
	title: "PropertyFlow | Find the Perfect Rental",
	description: "Find the perfect rental property with PropertyFlow",
	keywords: "rental, find rentals, find properties",
}

const MainLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	)
}

export default MainLayout
