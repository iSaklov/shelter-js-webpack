export default function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
	// console.log(getRandomInt(4));
	// Expected output: 1, 2 or 3
}
