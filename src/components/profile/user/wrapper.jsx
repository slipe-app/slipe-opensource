import ProfileBanner from "./banner";

export default function ProfileUserWrapper({ user }) {
	return (
		<div>
			<ProfileBanner username='q' pixels={[0, 0, 2, 2, 2, 2, 2, 2, 0, 1, 2, 3, 3, 3, 0, 2]} />
		</div>
	);
}
