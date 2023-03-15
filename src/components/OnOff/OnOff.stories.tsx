import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOff from './OnOff';

export default {
	title: 'controlled/OnOff',
	component: OnOff,
} as ComponentMeta<typeof OnOff>;

export const On: ComponentStory<typeof OnOff> = () => <OnOff select={true} setSelect={x => x} />
export const Off: ComponentStory<typeof OnOff> = () => <OnOff select={false} setSelect={x => x} />
export const OnOffChange: ComponentStory<typeof OnOff> = () => {
	const [select, setSelect] = useState(true);

	return <OnOff select={select} setSelect={setSelect} />
}
