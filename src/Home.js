import React, { useEffect } from 'react';
//import wsbcwhite from '../public/wsbcwhite.png';
import './Home.css';

function Home() {
  useEffect(() => {
    const logoEl = document.querySelector('.Home-logo');
    logoEl.classList.add('animate');
  }, []);

  useEffect(() => {
    const logoEl = document.querySelector('.Home-text');
    logoEl.classList.add('animate');
  }, []);

  return (
    <div className="Home">
      <body className="Home-body">
      {/* <img href="%PUBLIC_URL%/wsbcwhite.png" className="logo" alt="logo" /> */}


      <img src="/wsbcwhite.png" className="Home-logo" alt="logo" />
        <div className="Home-text">
            <p>Create Community,</p>
            <p>Drink Creatively</p>
        </div>
      </body>


    </div>
  );
}

export default Home;
