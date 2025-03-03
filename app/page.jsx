import Link from "next/link"

export default function HomePage() {
	return (
		<div>
			<h1 className="text-5xl font-bold">Welcome</h1>
			<Link href="/properties">Show Properties</Link>
		</div>
	)
}
