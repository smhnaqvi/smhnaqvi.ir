import React from 'react'
import './post.css'

function Post(props) {
    console.log(props)
    return (
        <div className={"post-item"}>
            <div className={"post-image"}>
                <img src={props.data.image} alt=""/>
            </div>
            <div className={"post-description"}>
                text
            </div>
            <div className={"post-info"}>
                <div className={"publish-date"}>1392-06-31</div>
            </div>
        </div>
    )
}

export default Post
