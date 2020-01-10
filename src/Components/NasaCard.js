import React from 'react'

function NasaCard(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <div className="content">
                <img src={props.scr} alt="img of the day" />
                <div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NasaCard;