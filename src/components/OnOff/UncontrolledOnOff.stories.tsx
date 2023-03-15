import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledOnOff from './UncontrolledOnOff';

export default {
	title: 'uncontrolled/UncontrolledOnOff',
	component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

export const UncontrolledOnOffChange: ComponentStory<typeof UncontrolledOnOff> = () => <UncontrolledOnOff/>;
