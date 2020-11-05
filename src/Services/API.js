class API {
	static fetchListBlog = () => {
		return this.fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40isrin068')
	}

	static fetch = async (url) => {
		try {
			let response = await fetch(url)
			return await response.json()
		} catch (error) {
			console.log('ERROR', error)
		}
	}
}

export default API
