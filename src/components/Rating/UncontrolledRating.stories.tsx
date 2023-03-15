import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledRating from './UncontrolledRating';

export default {
	title: 'uncontrolled/	UncontrolledRating',
	component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;

export const UncontrolledRatingChange: ComponentStory<typeof UncontrolledRating> = () => <UncontrolledRating/>;
