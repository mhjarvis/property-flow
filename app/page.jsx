import InfoBoxes from "@/components/InfoBoxes"
import Hero from "@/components/Hero"
import HomeProperties from "@/components/HomeProperties"

export default function HomePage() {
	console.log(process.env.MONGODB_URI)

	return (
		<div>
			<Hero />
			<InfoBoxes />
			<HomeProperties />
		</div>
	)
}
