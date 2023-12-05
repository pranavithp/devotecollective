import React, { useEffect } from "react";
import "../assets/css/nav.css";

function Header() {
  useEffect(() => {
    const handleMenuClick = () => {
      const mobileMenuContainer = document.querySelector(".mobile_menu_container");

      // Toggle the mobile menu container
      if (mobileMenuContainer.style.display === "block") {
        mobileMenuContainer.style.display = "none";
        // Show the "Menu" button and hide "icon-close"
        document.querySelector(".open_menu").style.display = "block";
        document.querySelector(".icon-close").style.display = "none";
      } else {
        mobileMenuContainer.style.display = "block";
        // Show "icon-close" and hide the "Menu" button
        document.querySelector(".open_menu").style.display = "none";
        document.querySelector(".icon-close").style.display = "block";
      }
    };

    // Attach event listener when component mounts
    const menuBtn = document.getElementById("menu_btn");
    if (menuBtn) {
      menuBtn.addEventListener("click", handleMenuClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (menuBtn) {
        menuBtn.removeEventListener("click", handleMenuClick);
      }
    };
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    
    <nav>
      <div className="mobile_nav">
        <div id="menu_btn">
          <div className="open_menu">Menu</div>
          <svg
            className="icon icon-close"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M1 33L33 1M1 1L33 33"
              stroke="#55200C"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="mobile_menu_container">
        <div className="mobile_menu">
          <ul>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#main">Main</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
