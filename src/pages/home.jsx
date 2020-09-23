import React from "react"
import Container from "../components/container";
import Menu from "../components/menu";

import './home.css'

import Profile from "../components/profile";
import Post from "../components/post"

import image1 from "../images/1.png"
import image2 from "../images/2.jpg"
import image3 from "../images/3.png"

export default function Home() {
    return (<Container>
        <div className={"banner"}>
            <div className={"showProfile"}>
                <Profile/>
                <Menu menuBtn={<div className={"fa fa-list nav-btn"}/>}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Resume</li>
                </Menu>
            </div>
        </div>
        <div className={"line"}/>
        <div className={"newPosts"}>
            <Post data={{image: image1}}/>
            <Post data={{image: image2}}/>
            <Post data={{image: image3}}/>
        </div>
    </Container>)
}