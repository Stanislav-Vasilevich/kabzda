import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';
import { v1 } from 'uuid';

type PropsType = {
  collapsed: boolean
	setCollapsed: (collapsed: boolean) => void
}

export type SelectItemsType = {
	id: string
	value: string
}

const items = [
	{id: v1(), value: 'milk'},
	{id: v1(), value: 'coffee'},
	{id: v1(), value: 'water'},
]

function Accordion(props: PropsType) {
	const [selectTitle, setSelectTitle] = useState(items[0]);

	return (
		<div>
			<AccordionTitle
				title={selectTitle}
				collapsed={props.collapsed}
				setCollapsed={props.setCollapsed}
			/>
			{props.collapsed && <AccordionBody items={items} setSelectTitle={setSelectTitle} setCollapsed={props.setCollapsed}/>}
		</div>
	);
}

export default Accordion;


