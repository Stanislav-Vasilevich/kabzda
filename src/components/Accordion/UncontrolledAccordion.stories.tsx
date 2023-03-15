import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledAccordion from './UncontrolledAccordion';

export default {
	title: 'uncontrolled/UncontrolledAccordion',
	component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

export const UncontrolledAccordionChange: ComponentStory<typeof UncontrolledAccordion> = () => <UncontrolledAccordion/>;
