import React, { useState } from "react";
import CardComponent from "./Cards/CardComponent";
import ArticleComponent from "./Article/ArticleComponent";

function Main() {
    const [activeArticle, setActiveArticle] = useState(null);

    const openArticle = (articleId) => {
        setActiveArticle(<ArticleComponent articleId={articleId} />);
    };

    const cardIds = [1, 2];

    return (
        <div style={styles.container}>
            {cardIds.map((id) => (
                <div key={id}>
                    <CardComponent cardId={id} openArticle={openArticle} />
                    {/* Display the corresponding ArticleComponent */}
                    {activeArticle && React.cloneElement(activeArticle, { key: id })}
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        marginTop: "2rem",
    },
};

export default Main;
