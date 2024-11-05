import "./user.scss"
import ProfileUserInfo from "./userInfo"
import ProfileUserInfo1 from "./userInfo1"

export default function ProfileUser({avatar, followers, name, username, pixels}){
    return(
        <div className="profile-user">
            <ProfileUserInfo avatar={avatar} followers={followers} username={username} pixels={pixels}/>
            <ProfileUserInfo1 name={name} username={username}/>
        </div>
    )
}