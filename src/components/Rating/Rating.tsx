import React from 'react';
import Star from './Star/Star';
import s from './Rating.module.css'

type PropsType = {
  value: number
	setValue: (value: number) => void
}

export function Rating(props: PropsType) {
	return (
		<div className={s.rating}>
			<h4 className={s.title}>Контролируемый рейтинг</h4>
			<Star value={1} selected={props.value > 0} setRating={props.setValue}/>
			<Star value={2} selected={props.value > 1} setRating={props.setValue}/>
			<Star value={3} selected={props.value > 2} setRating={props.setValue}/>
			<Star value={4} selected={props.value > 3} setRating={props.setValue}/>
			<Star value={5} selected={props.value > 4} setRating={props.setValue}/>
		</div>
	);
}
