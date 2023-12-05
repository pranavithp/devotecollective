import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/hero.json';

function Home() {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false, // Set loop to false for a single playthrough
      autoplay: true,
      animationData: animationData,
    });

    anim.addEventListener('complete', () => {
      anim.stop(); // Stop the animation when it reaches the end
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div style={styles.container} className='svgcontainer'>
      <div
        ref={animationContainer}
        style={{ width: '100%', height: '100%' }} // Set the size you want
      ></div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#55200C',
    borderRight: '1.5px solid #55200C',
    borderLeft: '1.5px solid #55200C',
    width: 'fit-content',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Home;
