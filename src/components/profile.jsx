import React from 'react'
import './profile.css'

import avatar from '../images/avatar.jpg'
import SocialNetwork from "./socialNetwork";

function Profile() {
    return (
        <div className={"profile"}>
            <img src={avatar} alt="avatar"/>
            <span className={"user-name"}>سید محمد حسین نقوی</span>
            <SocialNetwork/>
        </div>
    )
}

export default Profile