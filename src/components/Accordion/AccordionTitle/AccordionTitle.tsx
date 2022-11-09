import React from 'react';
import s from './AccordionTitle.module.css';

type PropsType = {
  title: string
}

function AccordionTitle(props: PropsType) {
  return <h3 className={s.title}>{props.title}</h3>;
}

export default AccordionTitle;
