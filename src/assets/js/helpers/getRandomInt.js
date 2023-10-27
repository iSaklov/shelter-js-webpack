export default function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
	// console.log(getRandomInt(3));
	// Expected output: 0, 1 or 2
}
