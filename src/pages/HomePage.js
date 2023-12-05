import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { Link as ScrollLink } from 'react-scroll';
import Footer from "../components/FooterComponent/FooterComponent";
import Collection from "../components/CollectionComponent";
import Home from "../components/HomeComponent";
import About from "../components/AboutComponent";
import HeaderComponent from "../components/HeaderComponent";
import TimeandLocation from "../components/MiniComponents/TimeAndCity";
import { getCardDataById } from "../components/Cards/CardData";
import "../components/Cards/card.css";
import { ArticleData, getArticleDataById } from "../components/Article/ArticleData";

function HomePage() {
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);

    const handleCollectionClick = () => {
        setIsCollectionOpen(!isCollectionOpen);
    };

    const cardIds = [1, 2];


    const navigate = useNavigate();

    const handleArticleButtonClick = (articleId) => {
        // Redirect to the article page with the specified articleId
        navigate(`/article/${articleId}`);
    };

    return (

        <div className="App">
            <HeaderComponent />
            <header>

                <TimeandLocation />
                <nav className="desktop-menu">
                    <ul>
                        <li onClick={handleCollectionClick}>Collection</li>
                        <li>
                            <ScrollLink to="home" smooth={true} offset={0} duration={500}>
                                Home
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="about" smooth={true} offset={0} duration={500}>
                                About
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="main" smooth={true} offset={0} duration={500}>
                                Articles
                            </ScrollLink>
                        </li>
                    </ul>
                </nav>
            </header>
            {isCollectionOpen && <Collection />}
            <div id="home">
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="main" style={styles.container}>
                {cardIds.map((id) => {
                    const cardData = getCardDataById(id);
                    return (
                        <div key={id} className="card" style={styles.card}>
                            <div className="card-wrapper">
                                <div className="details">
                                    <h3>{cardData.title}</h3>
                                    <div className="card-detailing">
                                        <h4>{cardData.published}</h4>
                                        <h4>{cardData.Author}</h4>
                                    </div>
                                </div>
                                <div className="content">
                                    <p>{cardData.excerpt}</p>
                                </div>


                                <button onClick={() => handleArticleButtonClick(id)}>
                                    Read More
                                </button>

                            </div>
                            <div className="card-image">
                                <img src={cardData.image} alt={cardData.title} style={styles.cardImage} />
                            </div>
                        </div>
                    );
                })}

            </div>
            <Footer />
        </div>


    );

}
const styles = {
    container: {
        marginTop: "2rem",
    },
    card: {
        // Define your card styles here
    },
    cardImage: {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        display: 'flex',
    },
    logo: {
        fontSize: "8em",
        marginBottom: "0",
        marginTop: "auto", // You might want to reconsider this styling
    },
    modalButton: {
        color: "", // Add color value here
    }
};

export default HomePage;
