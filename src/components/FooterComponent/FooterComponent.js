import React, { useState } from "react";
import "../FooterComponent/footer.css";
import EmailForm from "../MiniComponents/EmailComponent";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {

  return (
    <div style={styles.container}>
      <h5 className="footer-title">Hopelessly Devoted</h5>

      <div className="footer-container" style={styles.footerContainerontainer}>
        <div className="footer-image"> <img src={require('../FooterComponent/footer-img.jpg')}/>
        </div>
       
        <div className="footer-content">
          <h5> Devote </h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#main">Our Work</a></li>
            <li><a href="#collection">Devote Collection</a></li>
          </ul>
          <p> devoted2media@gmail.com</p>

          <div className="footer-email">
            <EmailForm></EmailForm>
          </div>
          <div className="footer-copy">
          <div style={styles.span}>
              <InstagramIcon>
              </InstagramIcon>
              <TwitterIcon>
              </TwitterIcon>
            </div>
            <p className="copyright">&copy; 2023</p>
            <div style={styles.icon}>
              <InstagramIcon>
              </InstagramIcon>
              <TwitterIcon>
              </TwitterIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    borderTop: "1.5px solid #55200C",
    padding: "1rem",
   
  },
  footerContainer:{
    maxWidth: "1390px",
    margin:"auto"

  },
  icon: {
    color: "#EBB8D5",
  },
  span: {
   opacity: "0",
  },
};

export default Footer;
