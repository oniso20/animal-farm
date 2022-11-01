import React from "react";

const Card = (props) => {
    return (
        <div className="cardStyle">
            <div id="image">
                <img  src={`https://source.unsplash.com/200x120/?${props.name}`} alt={props.name} />
                </div>
            <div className="card-info">
                <h2>{props.name}</h2>
                <div id="like-info">
                    <div id="likes">
                        <span>&#10084;</span>
                        <h4>{props.likes}</h4>
                    </div>
                    <button id="add-button">Add Like</button>
                    </div>
            </div>
        </div>
    )
}

export default Card