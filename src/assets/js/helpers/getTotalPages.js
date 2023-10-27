export default function getTotalPages(items, perPage) {
	return Math.ceil(items / perPage)
}
