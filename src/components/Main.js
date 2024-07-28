import React from "react";

export default function Main(props) {

    return (
        <>
        <main className="main">
            <div className="image">
                <img src={require(`../images/${props.imageUrl}`)} alt="mount fuji"></img>
            </div>

            <div className="right-content">

                <div className="first-section">
                    <i class="ri-map-pin-fill"></i>

                    <span className="country">{props.location}</span>

                    <a href="#" className="link">View on Google Maps</a>
                </div>


                <h1 className="heading-one">{props.title}</h1>

                <h5 className="heading-five"> {props.startDate} - {props.endDate} </h5>

                <p className="description">{props.description}</p>
            </div>
        </main>

        <div className="hr">
            <hr />
        </div>
        
        </>
   )
}