import React from "react";
import "./socialNetwork.css"

export default function SocialNetwork() {
    return (<ul className={"social-icon"}>
        <li>
            <a href="https://t.me/smhnaqvi"
               className={"fab fa-telegram-plane"}/>
        </li>
        <li>
            <a href="https://www.instagram.com/smhnaqvi.ir"
               className={"fab fa-instagram"}/>
        </li>
        <li>
            <a href="https://www.facebook.com/smhnaqvi111"
               className={"fab fa-facebook-square"}/>
        </li>
        <li>
            <a href="https://twitter.com/smhnaqvi111"
               className={"fab fa-twitter-square"}/>
        </li>
        <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=smhnaqvi111@gmail.com" target="_blank"
               className={"fas fa-envelope"}/>
        </li>
    </ul>)
}