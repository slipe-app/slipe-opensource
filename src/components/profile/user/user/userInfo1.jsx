import UIFollowButton from "../../../common/ui/followButton";
import "./userInfo1.scss";

export default function ProfileUserInfo1({ username, name, isFollowed }) {
	return (
		<div className='profile-user-info1'>
			<div className="profile-user-info1__user-data">
				<span className="user-data__name">{name}</span>
				<span className="user-data__username">@{username}</span>
			</div>
            <UIFollowButton padding={0.8125}/>
		</div>
	);
}
