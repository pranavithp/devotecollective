
import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { getArticleDataById } from "../components/Article/ArticleData";
import { useNavigate } from "react-router-dom";
import "../assets/css/article.css"
import Header from '../components/HeaderComponent';
import DeskHeader from '../components/DeskHeader';
import Footer from "../components/FooterComponent/FooterComponent";
const ArticlePage = ({ articleId }) => {
    const { id } = useParams(); // Get the article ID from the URL
    const articleData = getArticleDataById(parseInt(id)); // Convert id to integer if necessary

    const [isCollectionOpen, setIsCollectionOpen] = useState(false);
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        // Redirect to the home page
        navigate('/');
    };

    if (!articleData) {
        return <div>Oopsie! theres nothing here pookie</div>;
    }

    // Render the fetched article data
    return (

        <div style={styles.container}>
            <DeskHeader />
            <Header />

            <div style={styles.contentContainer} className='content-container'>
              

   
                    <div className='banner-image'>
                        <img src={articleData.image} alt={articleData.title} />

                    </div>
                    <div className='content-wrap'>
                    <h2 className='article-title'>{articleData.title} </h2>
                    <div className='article-content'>
                        <div className='info'>
                            <div style={{ flex: 2 }}>
                                <p>Published: {articleData.published}</p>
                                <p>Author: {articleData.Author}</p>
                            </div>
                            <div style={{ flex: 1, textAlign: "end" }}>
                                <p>Read time: {articleData.readTime}</p>
                            </div>
                        </div>
                        <div className="excerpt">
                            {articleData.excerpt.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
const styles = {
    container: {

        display: 'flex',
        flexDirection: 'column',

    },
    contentContainer: {
        borderTop: "1.5px solid #55200C",
        paddingTop: '1rem',
        paddingBottom: '4rem',

    },

};
export default ArticlePage;

