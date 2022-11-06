import React from "react";

const Card = (props) => {
  return (
    <div className="cardStyle">
      <div id="image">
        <img
          src={`https://source.unsplash.com/230x145/?${props.name}`}
          alt={props.name}
        />
      </div>
      <div onClick={props.removeCard} className="close-button">
        &times;
      </div>
      <div className="card-info">
        <h2>{`${props.name[0].toUpperCase()}${props.name.slice(1)}`}</h2>
        <div id="like-info">
          <button onClick={props.addLikes} className="button" id="add-button">
            +like
          </button>
          <div id="likes">
            <span class="material-symbols-outlined">
              {props.likes >= 0 ? "favorite" : "heart_broken"}
            </span>
            <h4>{props.likes}</h4>
          </div>
          <button
            onClick={props.addDislikes}
            className="button"
            id="add-button"
          >
            -like
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
