import React, { useState } from "react";
import { Link } from 'react-router-dom';


import Collection from './CollectionComponent';
import TimeandLocation from './MiniComponents/TimeAndCity';
function DeskHeader() {
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);

    const handleCollectionClick = () => {
        setIsCollectionOpen(!isCollectionOpen);
    };

  return (
    <header>
     
      <TimeandLocation />
      <nav className="desktop-menu">
        <ul>
          <li onClick={handleCollectionClick}>Collection</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/"> Chronicles</Link>
          </li>
        </ul>
        {isCollectionOpen && <Collection />}
      </nav>
    </header>
  );
}
const styles = {


    modalButton: {
        color: "", // Add color value here
    }
};

export default DeskHeader;