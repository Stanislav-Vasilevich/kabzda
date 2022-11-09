import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type PropsType = {
  title: string
  collapsed: boolean
}

function Accordion(props: PropsType) {
  if(props.collapsed) {
    return (
      <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
      </div>
    );
  } else {
    return (
      <div>
        <AccordionTitle title={props.title}/>
      </div>
    );
  }
}

export default Accordion;


