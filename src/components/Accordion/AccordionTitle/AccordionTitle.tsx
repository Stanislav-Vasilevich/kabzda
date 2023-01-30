import React from 'react';
import s from './AccordionTitle.module.css';

type PropsType = {
  title: string
	collapsed?: boolean
	setCollapsed?: (collapsed: boolean) => void
}

function AccordionTitle(props: PropsType) {
	const onClickHandler = () => {
		props.setCollapsed && props.setCollapsed(!props.collapsed);
	}

  return <h4 className={s.title} onClick={onClickHandler}>{props.title}</h4>;
}

export default AccordionTitle;
