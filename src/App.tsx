import React from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';

function App() {
  return (
    <div>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <Accordion title={'Отзывы'} collapsed={true}/>
      <Accordion title={'Вопросы и ответы'} collapsed={false}/>
			<OnOff/>
			<OnOff/>
    </div>
  );
}

export default App;
