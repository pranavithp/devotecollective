import React, {useState } from "react";

import CloseIcon from '@mui/icons-material/Close';


function Collection() {
    const [isModalOpen, setIsModalOpen] = useState(true); // Assuming the modal is initially open

    const handleCloseClick = () => {
        setIsModalOpen(false); // Set the state to close the modal
    };

    return (
        // Render the modal only if isModalOpen is true
        isModalOpen && (
            <div style={styles.container} className="ModalContainer">
                <div style={styles.contentContainer}>
                    <CloseIcon style={styles.svg} onClick={handleCloseClick} className="closeButton" />
                    <h2 style={styles.logo}>Devote's Collection</h2>

                    <ul className="CollectionList" style={styles.list}>
                        <li li style={styles.li}>
                            <a href="http://devote-tarot.isabellecuyno.com" target="_blank" rel="noopener noreferrer">
                                Devote Tarot
                            </a>
                        </li>
                        <li style={styles.li}>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Devote Creative Toolkit
                            </a>
                        </li>

                        <li style={styles.spacing} > And more to come...</li>
                    </ul>
                </div>
            </div>
        )
    );
}


const styles = {
    container: {
        position: "absolute",
        width: "565px",
        height: "778px",
        maxWidth: "565px",
        maxHeight: "778px",
        right: "50%",
        transform: "translateX(50%)",
        bottom: "2%",
        zIndex:" 11",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    contentContainer: {
        position: "absolute",
        height: "inherit",
        width: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        marginTop:"10rem"
    },
    logo: {
        fontSize: "4rem",
        margin:"2rem"
    },
   spacing: {
     
        marginTop:"8rem",
        borderTop:"0",
        borderLeft:"0",
        borderRight:"0",
        borderBottom: "1.5px solid #55200C",

        borderRadius:"0",
        padding:"0"
    },
    svg:{
        fontSize:"2.5em",
    },
    li:{
        borderTop:"0",
        borderLeft:"0",
        borderRight:"0",
        borderBottom: "1.5px solid #55200C",

        borderRadius:"0",
        padding:"0"

    },
    list:{
        width: "70%",
        margin:"auto",
        marginTop:"2rem",
    }

    /* Other styles for your Collection component */
};
export default Collection;