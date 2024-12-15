const colorValues = [
	"#A380DE",
	"#FF53E8",
	"#5FD3C6",
	"#799EE3",
	"#535BFF",
	"#F27AC2",
	"#FFA953",
	"#0070F3",
	"#4A7DB9",
	"#EBFF53",
	"#4741FF",
	"#FFCA41",
	"#53CEFF",
	"#E46BCA",
	"#D96C6E",
	"#AF53FF",
	"#59CE3C",
	"#539DFF",
	"#76DE7D",
	"#FF3F3F",
	"#23FF6C",
	"#FFE628",
	"#FF8753",
	"#EB9494",
];

const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-.";

const PixelsColors = Object.fromEntries(characters.split("").map((char, index) => [char, colorValues[index % colorValues.length]]));

export default PixelsColors;
