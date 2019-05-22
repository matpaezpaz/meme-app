import React from 'react';
import './style.scss';
import Card from '../../Components/Card';

const CardSection = (props) => {
    const { data } = props;
    let cards;
    if( data ) {
        cards = data.map((item, index) => <Card key={index} title={item.title} img={item.img} />);
    } else {
        cards = 'There are no memes';
    }

    return (
        <section className="card-section">
            <h2> My Dankest Memes </h2>
            <div className="card-list">
                {
                    cards
                }
            </div>
        </section>
    );
}
export default CardSection;