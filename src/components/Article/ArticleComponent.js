import React from 'react';
import { getArticleDataById } from './ArticleData';

const ArticleComponent = ({ articleId }) => {
    // Fetch article data based on the provided articleId
    const articleData = getArticleDataById(articleId);

    // Render the fetched article data
    return (
        <div>
            <h2>{articleData.title}</h2>
            <div banner-image>
                <img src={articleData.image} alt={articleData.title}  />
             
            </div>
            <p>Published: {articleData.published}</p>
            <p>Author: {articleData.Author}</p>
            <div>
                {/* Render other content like paragraphs */}
                {articleData.excerpt}
            </div>
            {/* Add any other necessary content based on your articleData */}
        </div>
    );
};

export default ArticleComponent;
