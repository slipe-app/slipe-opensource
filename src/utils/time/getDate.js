export default function GetDate(time) {
	const date = new Date(time);

	const year = date.getUTCFullYear();
	const month = String(date.getUTCMonth() + 1).padStart(2, "0");
	const day = String(date.getUTCDate()).padStart(2, "0");

	return `${day}.${month}.${year}`;
}
