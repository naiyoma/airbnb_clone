import React from "react"
// import pic from "../assets/images/photogrid.jpg"

function Hero (){
    return (
        <section className="hero">
            <img src="/assets/images/photogrid.jpg" className="hero-pic"></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero