const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

async function fetchProperties() {
	try {
		// Hangle the case where the domain is not available yet
		if (!apiDomain) {
			return []
		}

		const res = await fetch(`${apiDomain}/properties`)

		if (!res.ok) {
			throw new Error("Failed to fetch properties")
		}

		const data = await res.json()
		console.log(data)
		console.log(data.properties)
		return data.properties
	} catch (error) {
		console.error(error)
		return []
	}
}

export { fetchProperties }
