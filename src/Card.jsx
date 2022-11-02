import React from "react";

const Card = (props) => {
    return (
        <div className="cardStyle">
            <div id="image">
                <img  src={`https://source.unsplash.com/200x120/?${props.name}`} alt={props.name} />
                </div>
                <div onClick={props.removeCard} className="close-button">&times;</div>
            <div className="card-info">
                <h2>{props.name}</h2>
                <div id="like-info">
                <button
                    onClick={props.addLikes}
                    className="button" id="add-button">Dislikes</button>
                    <div id="likes">
                        <span
                        onClick={props.addLikes} 
                        >😌</span>
                        <h4>{props.likes}</h4>
                    </div>
                    <button
                    onClick={props.addLikes}
                    className="button" id="add-button">Add Like</button>
                    </div>
            </div>
        </div>
    )
}

export default Card