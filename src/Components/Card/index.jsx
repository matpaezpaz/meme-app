import React from 'react';
import './style.scss';

const Card = (props) => {
    const { title, img } = props;

    return (
        <div className="card">
            <h1> {title} </h1>
            <img src={img} alt={title} className="card-figure" />
        </div>
    )
}

export default Card;