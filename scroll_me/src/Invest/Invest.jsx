import React from 'react'
import "./invest.css";
import { motion } from 'framer-motion';

const Invest = () => {
  return (
    <div  className="Invest">
      <div className="up ">
        <h1>How to Invest?</h1>
        
        <h3>Get to Know Our Ecosystem’s Key Features & Benefits</h3>
        <motion.img  animate={{rotate:360 }}  src="https://i.pinimg.com/736x/9f/de/67/9fde67b236de5c3b2f9e2e05193fc1ef.jpg" alt="" className="ques" />
      </div>
      <motion.div className="i-left"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5, duration:0.5}}
      >
        
         <div className="i-l-first">
         <img src="https://i.pinimg.com/736x/1e/ba/17/1eba1712d1f3f9dee7a472edf83976a7.jpg" alt="" className="logo-one" />
         <h3>Maintain USDT and BNB in your Metamask </h3>
         <h3>or Trust wallet.</h3>
         </div>
          <br></br>
          <br></br>
         <div className="i-l-second">
            <img src="https://i.pinimg.com/736x/ef/c5/60/efc560c964213a454070c12463b1f7e4.jpg" alt="" className="logo-two" />
           <h3>Current discounted price for early Investors is</h3>
          </div>
         </motion.div>
      <div>
      <div className="i-right">
        <div className="i-r-first">
            <img src="https://i.pinimg.com/736x/b9/ad/b2/b9adb2c0c4adfa52f4c68afb4a7a8cc7.jpg" alt="" className="logo-three" />
            <h3>Participate in ICO by making the payment</h3>
        </div>
        <br></br>
        <br></br>
        <div className="i-r-second">
            <img src="https://i.pinimg.com/736x/e0/76/24/e07624ae2473e9f3041c973cb922fb03.jpg" alt="" className="logo-four" />
            <h3>More monetization opportunities for investors.</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Invest
