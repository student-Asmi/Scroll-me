import React from 'react'
import "./people.css";

const People = () => {
  return (
    <div className="People">
      <div className="p-left">
        <img src="https://i.pinimg.com/736x/cc/b6/70/ccb670d457479c9d2a1f89950555968d.jpg" alt="" className="ai" />
      </div>
      <div className="p-right">
          <h1>How It Works</h1>
          <p>For Creators: Upload reels, engage with fans, and earn SM tokens directly. Retain</p>
          <p>full ownership of your content while benefiting financially.</p>
          <br></br>
          <p>For Fans: Watch reels, engage, and earn rewards in SM tokens. Unlock exclusive</p>
          <p>perks through consistent activity.</p>
          <br></br>
          <p>Advertisers: Connect with a targeted audience through innovative strategies,</p>
          <p>ensuring meaningful reach.</p>
          
      </div>
    </div>
  )
}

export default People
