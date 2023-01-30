import React from 'react';
import s from './Star.module.css'

type PropsType = {
	value: number
	selected: boolean
	setRating?: (value: number) => void
}

function Star(props: PropsType) {
	const onClickHandler = () => {
		if(props.setRating) {
			props.setRating(props.value)
		}
	}

	return (
		<span className={s.star} onClick={onClickHandler}>
			{ props.selected ? <>&#9733;</> : <>&#9734;</> }
		</span>
	)
}

export default Star;
