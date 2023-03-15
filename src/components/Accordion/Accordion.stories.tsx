import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';

export default {
	title: 'controlled/Accordion',
	component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const AccordionOn: ComponentStory<typeof Accordion> = () => {
	return <Accordion title={'Title'} collapsed={true} setCollapsed={x => x}/>
};

export const AccordionOff: ComponentStory<typeof Accordion> = () => {
	return <Accordion title={'Title'} collapsed={false} setCollapsed={x => x}/>
};

export const AccordionChange: ComponentStory<typeof Accordion> = () => {
	const [collapsed, setCollapsed] = useState(false);

	return <Accordion title={'Title'} collapsed={collapsed} setCollapsed={setCollapsed}/>
};
