import React from "react";
import "./FriendCard.css";

const Card = props => (
      <img src={props.image} class="rounded float-left col-xs-3 mb-3" alt={props.id} data-status={props.clickstatus} onClick={props.onClick}></img>
);

export default Card;

