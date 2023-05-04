import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";
import {v1} from 'uuid';

const items = [{id: v1(), value: 'hello'}, {id: v1(), value: 'bue'}];

const UncontrolledAccordion = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [selectTitle, setSelectTitle] = useState(items[0]);

	return (
		<div>
			<AccordionTitle
				title={selectTitle}
				collapsed={collapsed}
				setCollapsed={setCollapsed}
			/>
			{collapsed && <AccordionBody items={items} setSelectTitle={setSelectTitle} setCollapsed={setCollapsed}/>}
		</div>
	);
};

export default UncontrolledAccordion;
