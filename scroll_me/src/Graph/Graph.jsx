import React from 'react'
import "./graph.css";
const Graph = () => {
  return (
    <div className="graph">
      <div className="g-top ">
        <h1>Scroll Me Tokenomics</h1>
      </div>
     <div className="contain">
     <div className="g-left">
        <img src="ChatGPT Image Apr 21, 2025, 02_00_20 PM.png" />
      </div>
      <div className="g-right">
        <div className="g-r-first">
            <p>Total Tokens: 1 Billion SM</p>
           <br></br>
            <p>22% Foundation Reserve</p>
            <br></br>
            <p>7.8% Pre ICO</p>
            <br></br>
            <p>2.5% Public Sale</p>
        </div>
         <div className="g-r-sec">
            <p>39% Community</p>
            <br></br>
            <p>24.4% Marketing&Technology partners</p>
            <br></br>
            <p>2.9% Liquidity</p>
             <br></br>
            <p>1.5%% Airdrops & Bug bounty</p>
         </div>
      </div>
     </div>

     <div className="fund ">
        <h1>Use Of Funds</h1>
        
        <p>Platform Development: 45%</p>
        <p>Ecosystem Growth: 30%</p>
        <p>General Administration: 10%</p>
        <p>Legal: 5%</p>
        <p>Liquidity: 10%</p>
     </div>
    </div>
  )
}

export default Graph
