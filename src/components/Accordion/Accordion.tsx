import React from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type PropsType = {
  title: string
  collapsed: boolean
	setCollapsed: (collapsed: boolean) => void
}

function Accordion(props: PropsType) {
	return (
		<div>
			<AccordionTitle
				title={props.title}
				collapsed={props.collapsed}
				setCollapsed={props.setCollapsed}
			/>
			{props.collapsed && <AccordionBody/>}
		</div>
	);
}

export default Accordion;


