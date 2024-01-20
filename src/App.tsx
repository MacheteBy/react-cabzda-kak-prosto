import React, { useState } from 'react';
import './App.css';
import Accordion from './componets/Accordion/Accordion';
import AppTitle from './componets/AppTitle/AppTitle';
import Rating from './componets/Rating/Rating';
import UncontrolledAccordion from './componets/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './componets/UncontrolledRating/UncontrolledRating';
import UncontrolledOnOff from './componets/UncontrolledOnOff/UncontrolledOnOff';
import OnOff from './componets/OnOff/OnOff';
import Select from './componets/Select/Select';

function App() {

  const items = [
    { title: 'one', value: 1 },
    { title: 'two', value: 2 },
    { title: 'three', value: 3 },
  ];

  const selectItems = [
    { title: 'none', value: 0 },
    { title: 'Minsk', value: 1 },
    { title: 'Moskov', value: 2 },
    { title: 'Kiev', value: 3 },
  ]

  let [ratingValue, setRatingValue] = useState(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState(false)
  let [onOff, setOnOff] = useState(true)
  let [selectValue, setSelectValue] = useState('Minsk')
  let [selectCollapsed, setSelectCollapsed] = useState(false)


  const onClickAccordion = (value: any) => {
    alert(value)
  }

  const onClickMenuHandler = (value: any) => {
    setSelectValue(value)
    setSelectCollapsed(!selectCollapsed)
  }



  return (
    <div className="App">
      <OnOff value={onOff} onClick={setOnOff} />
      <UncontrolledOnOff />
      {/* <AppTitle /> */}
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion title={'Меню'} items={items} collapsed={accordionCollapsed} onClick={setAccordionCollapsed} onClickAccordion={onClickAccordion} />
      <UncontrolledRating />
      <UncontrolledAccordion title={'Бургер меню'} />
      <Select selectItems={selectItems}
              selectValue={selectValue}
              selectCollapsed={selectCollapsed}
              onClick={setSelectCollapsed}
              onClickMenu={onClickMenuHandler} />
    </div>
  );
}


export default App;
