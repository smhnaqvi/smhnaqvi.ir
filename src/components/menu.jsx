import React from "react"
import './menu.css'


export default function Menu(props) {

    // let button = document.getElementById(props.navBtn.props.id)
    console.log(props.menuBtn)

    function updateMenuState(e) {
        // let button = e.target;
        let patent = e.target.parentElement;
        let navElement = patent.getElementsByClassName("nav").item(0);
        navElement.classList.toggle('visible')
    }

    return (<React.Fragment>
        <div className={"nav-bar"}>
            <div onClick={updateMenuState} className={"fa fa-list nav-btn"}/>
            <ul id={"mainNav"} className={"nav"}>
                {props.children}
            </ul>
        </div>
    </React.Fragment>)
}