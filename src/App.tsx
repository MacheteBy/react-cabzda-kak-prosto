import React from 'react';
import './App.css';
import Accordion from './componets/Accordion/Accordion';
import AppTitle from './componets/AppTitle/AppTitle';
import Rating from './componets/Rating/Rating';

function App() {
  return (
    <div className="App">
      <AppTitle />
      Article 1
      <Rating value={1}/>
      <Accordion title={'Меню'}/>
      Article 2
      <Rating value={2}/>
      <Accordion title={'Другое меню'}/>
    </div>
  );
}


export default App;
