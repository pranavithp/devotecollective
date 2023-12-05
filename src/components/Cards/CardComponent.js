
import React from 'react';


import { getCardDataById } from './CardData';
import "../Cards/card.css";

const CardComponent = ({ cardId }) => {
    const cardData = getCardDataById(cardId);

    const openArticleInNewTab = () => {
        window.open(`/article/${cardId}`, '_blank'); // Replace with your route structure
    };
    return (
        <div className="card">
            <div className="card-wrapper">
                <div className="details">

                    <h3 >{cardData.title} </h3>
                    <div className="card-detailing">
                        <h4 >{cardData.published}</h4>
                        <h4 >{cardData.Author}</h4>
                   
                    </div>
                    
                </div>

                <div className="content">
                    <p>{cardData.excerpt}</p>
                </div>
                <button onClick={openArticleInNewTab}>Read Full</button>
            </div>

            <div card-image>
                <img src={cardData.image} alt={cardData.title} style={styles.Format} />
             
            </div>
        </div>
       
    );
};
const styles = {

    Format: {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        display: 'flex'
    },

};

export default CardComponent;