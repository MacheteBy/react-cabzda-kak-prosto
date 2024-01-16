import React, { useState } from 'react';
import './App.css';
import Accordion from './componets/Accordion/Accordion';
import AppTitle from './componets/AppTitle/AppTitle';
import Rating from './componets/Rating/Rating';
import UncontrolledAccordion from './componets/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './componets/UncontrolledRating/UncontrolledRating';
import UncontrolledOnOff from './componets/UncontrolledOnOff/UncontrolledOnOff';
import OnOff from './componets/OnOff/OnOff';

function App() {

  let [ratingValue, setRatingValue] = useState(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState(false)
  let [onOff, setOnOff] = useState(true)

  return (
    <div className="App">
      <OnOff value={onOff} onClick={setOnOff}/>
      <UncontrolledOnOff/>
      {/* <AppTitle /> */}
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion title={'Меню'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
      <UncontrolledRating/>
      <UncontrolledAccordion title={'Бургер меню'}/>
    </div>
  );
}


export default App;
