import InfoBoxes from "@/components/InfoBoxes"
import Hero from "@/components/Hero"
import HomeProperties from "@/components/HomeProperties"

const HomePage = () => {
	// (process.env.MONGODB_URI) // test mongodb connection

	return (
		<div>
			<Hero />
			<InfoBoxes />
			<HomeProperties />
		</div>
	)
}

export default HomePage
