import "./user.scss"
import ProfileUserInfo from "./userInfo"
import ProfileUserInfo1 from "./userInfo1"

export default function ProfileUser({avatar, followers, name, username, pixels}){
    return(
        <div className="profile-user">
            <ProfileUserInfo avatar={avatar} followers={'34.99K'} username='dikiy' pixels={[0, 0, 2, 2, 2, 2, 2, 2, 0, 1, 2, 3, 3, 3, 0, 2]}/>
            <ProfileUserInfo1 name='Dikiy perec' username='dikiy'/>
        </div>
    )
}