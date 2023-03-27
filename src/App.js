import './App.css';

import React from 'react'
import NavBar from './components/navbar';
import Carousel from './components/carousel';
import Header from './components/header';
import Content from './components/content';
import Details from './components/details';
import Popup from './components/popUp';

function App () {
    return (
      <div>
          <Header />
          <NavBar />
          <Carousel />
          <Content />
          <Details />
          <Popup /> 
      </div>
    )
}


export default App;