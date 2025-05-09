const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// Fetch all properties
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
		return data.properties
	} catch (error) {
		console.error(error)
		return []
	}
}

// Fetch single property
async function fetchProperty(id) {
	try {
		// Hangle the case where the domain is not available yet
		if (!apiDomain) {
			return null
		}

		const res = await fetch(`${apiDomain}/properties/${id}`)

		if (!res.ok) {
			throw new Error("Failed to fetch properties")
		}

		const data = await res.json()
		return data
	} catch (error) {
		console.error(error)
		return null
	}
}

export { fetchProperties, fetchProperty }
