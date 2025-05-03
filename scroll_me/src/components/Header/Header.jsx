import React from 'react'
import "./Header.css";

const Header = () => {
  return (

    <div className="header">
  <div className="left-items">
    <img src='https://scrollme.io/static/media/logo.bff850a86e8f5a9cc0a4.png' className="logo"></img>
    
  </div>
  <div className="right-items">
  <img className="bubble" src="https://presale.earthmeta.ai/assets/img/babbles.png" alt="bubble" />
  
  <a >Home</a>
    <a >About</a>
    <a >Roadmap</a>
    <a>Team</a>
    <a >Whitepaper</a>
    <button>BUY NOW</button>
  </div>
</div>
    // <div className="header container">
      
    //   <li className="header container ">Home</li>
    //   <li className="header container">About</li>
    //   <li className="header container">Roadmap</li>
    //   <li className="header container">Team</li>
    //   <li className="header container">Whitepaper</li>
    //   <button className="header container">BUY NOW</button>
    // </div>
  )
}

export default Header
