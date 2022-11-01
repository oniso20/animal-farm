import React from "react";

const Card = (props) => {
    return (
        <div className="cardStyle">
            <div id="image">
                <img  src={`https://source.unsplash.com/200x120/?${props.name}`} alt="" />
                </div>
            <div className="card-info">
                <h2>{props.name}</h2>
                <div id="like-info">
                    <div id="likes">
                        <span class="material-symbols-outlined">thumb_up</span>
                        <h3>{props.likes}</h3>
                    </div>
                    <button id="add-button">Add Like</button>
                    </div>
            </div>
        </div>
    )
}

export default Card