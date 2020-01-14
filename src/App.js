import React,  { Component }from 'react';
import Header from './components/header';
import Main from './components/main';
import headerCSS from './components/header.css';
import mainCSS from './components/main.css';
import Routes from '../src/routes';



const App = () => (
  <div className="App">
     {/* <Header />
     <Main /> */}
      <Routes/>
      </div>

)


export default App;
