import React from 'react';
import './App.css';
import Accordion from './componets/Accordion/Accordion';
import AppTitle from './componets/AppTitle/AppTitle';
import OnOff from './componets/OnOff/OnOff';
import Rating from './componets/Rating/Rating';
import UncontrolledAccordion from './componets/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './componets/UncontrolledRating/UncontrolledRating';

function App() {
  return (
    <div className="App">
      <OnOff/>
      <OnOff/>
      <AppTitle />
      Article 1
      <Rating value={2}/>
      <Accordion title={'Меню'} collapsed={false}/>
      Article 2
      <Rating value={4}/>
      <Accordion title={'Другое меню'} collapsed={true}/>
      <UncontrolledAccordion title={'Бургер меню'}/>
      <UncontrolledRating/>
    </div>
  );
}


export default App;
