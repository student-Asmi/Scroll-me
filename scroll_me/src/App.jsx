import React from 'react'
import "./App.css";
import Header from './components/Header/Header';
import TopFold from './components/Topfold';
import Hero from './hero/hero';
import Middle from './Middle/Middle';
import Down from './Down/Down';
import People from './People/People';
import Revenue from './Revenue/Revenue';
import Invest from './Invest/Invest';
import Creator from './Creator/Creator';
import Graph from './Graph/Graph';
import Connect from './Connect/Connect';
import Roadmap from './Roadmap/Roadmap';
import Question from './Question/Question';

const App = () => {
  return (
    <div>
      <Header>
      </Header>
      <TopFold></TopFold>
      <Hero></Hero>
      <Middle></Middle>
      <Down></Down>
      <People></People>
      <Revenue></Revenue>
      <Invest></Invest>
      <Creator></Creator>
      <Graph></Graph>
      <Connect></Connect>
      <Roadmap></Roadmap>
      <Question></Question>
    </div>
  )
}

export default App
