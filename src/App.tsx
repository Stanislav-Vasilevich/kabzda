import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";

function App() {
	const [collapsedAccordion, setCollapsedAccordion] = useState(false)
	const [valueRating, setValueRating] = useState(3)
	const [select, setSelect] = useState(false);

  return (
    <div className={'container first'}>
			<h1 className={'title'}>Реакт кабзда как подробно</h1>
			<h2 className={'title title_section'}>Понедельник</h2>
			<h3 className={'title title_step'}>1 неделя:</h3>
      <Rating value={valueRating} setValue={setValueRating}/>
			<UncontrolledRating/>
      <Accordion
				title={'Контролируемый аккордион'}
				collapsed={collapsedAccordion}
				setCollapsed={setCollapsedAccordion}
			/>
      <UncontrolledAccordion/>
			<h4 className={'title title_task'}>Контролируемый переключатель</h4>
			<OnOff select={select} setSelect={setSelect}/>
			<h4 className={'title title_task'}>Неконтролируемый переключатель</h4>
			<UncontrolledOnOff/>
    </div>
  );
}

export default App;
