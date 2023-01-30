import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

const UncontrolledAccordion = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div>
			<AccordionTitle
				title={'Неконтролируемый аккордион'}
				collapsed={collapsed}
				setCollapsed={setCollapsed}
			/>
			{collapsed && <AccordionBody/>}
		</div>
	);
};

export default UncontrolledAccordion;
