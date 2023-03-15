import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

type PropsType = {
	title: string
}

const UncontrolledAccordion = (props: PropsType) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div>
			<AccordionTitle
				title={props.title}
				collapsed={collapsed}
				setCollapsed={setCollapsed}
			/>
			{collapsed && <AccordionBody/>}
		</div>
	);
};

export default UncontrolledAccordion;
