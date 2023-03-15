import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rating } from './Rating';

export default {
	title: 'controlled/Rating',
	component: Rating,
} as ComponentMeta<typeof Rating>;

export const Rating0: ComponentStory<typeof Rating> = () => <Rating setValue={() => {}} value={0}/>;
export const Rating1: ComponentStory<typeof Rating> = () => <Rating setValue={() => {}} value={1}/>;
export const Rating2: ComponentStory<typeof Rating> = () => <Rating setValue={() => {}} value={2}/>;
export const Rating3: ComponentStory<typeof Rating> = () => <Rating setValue={() => {}} value={3}/>;
export const Rating4: ComponentStory<typeof Rating> = () => <Rating setValue={() => {}} value={4}/>;
export const Rating5: ComponentStory<typeof Rating> = () => <Rating setValue={() => {}} value={5}/>;
export const RatingChanging: ComponentStory<typeof Rating> = () => {
	const [rating, setRating] = useState(5);
	return <Rating setValue={setRating} value={rating}/>
};
