import { Image } from "@unpic/preact";

const UserBadge = ({ badge, badgeSize }) => {
	//2.6D 61
	switch (badge) {
		case "verifed":
			return <Image src='emojis/emoji_230xw.png' width={64} height={64} className='h-full aspect-square' />;
		case "developer":
			return <Image src='emojis/emoji_230xw.png' width={64} height={64} className='h-full aspect-square' />;
		case "premium":
			return <Image src='emojis/emoji_230xw.png' width={64} height={64} className='h-full aspect-square' />;
		default:
			return <Image src='emojis/emoji_230xw.png' width={64} height={64} style={{ width: badgeSize, height: badgeSize }} />;
	}
};

export default UserBadge;
