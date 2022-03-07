import React from "react";
// import pic from "../assets/images/surfing.jpg";
// import star from "star.png"


function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src="/assets/images/surfing.jpg" className="card--image" />
            <div className="card--stats">
                <img src="/assets/images/star.png" className="card--star"/>
                <span>{props.rating}</span>
                <span>{props.reviewCount}</span>
                <span>{props.country}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From: ${props.price}</span></p>
        </div>
    )
}

export default Card