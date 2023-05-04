import React from 'react';
import s from './AccordionTitle.module.css';
import {SelectItemsType} from '../Accordion';

type PropsType = {
  title: SelectItemsType
	collapsed?: boolean
	setCollapsed?: (collapsed: boolean) => void
}

function AccordionTitle(props: PropsType) {
	const onClickHandler = () => {
		props.setCollapsed && props.setCollapsed(!props.collapsed);
	}

  return <div className={s.title} onClick={onClickHandler}>{props.title.value} <span className={s.arrow}></span></div>;
}

export default AccordionTitle;
