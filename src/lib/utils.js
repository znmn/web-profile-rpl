function slugify(str) {
	return (
		str
			.toLowerCase()
			.replace(/[^a-zA-Z0-9 ]/g, "")
			.replace(/\s/g, "-")
			.substring(0, 50) +
		"-" +
		Date.now()
	);
}

module.exports = { slugify };
