import React, {useState} from 'react';
import Star from "./Star/Star";
import s from './UncontrolledRating.module.css'

const UncontrolledRating = () => {
	const [value, setValue] = useState(4)

	return (
		<div>
			<h4 className={s.title}>Неконтролируемый рэйтинг</h4>
			<Star value={1} selected={value > 0} setRating={() => setValue(1)}/>
			<Star value={2} selected={value > 1} setRating={() => setValue(2)}/>
			<Star value={3} selected={value > 2} setRating={() => setValue(3)}/>
			<Star value={4} selected={value > 3} setRating={() => setValue(4)}/>
			<Star value={5} selected={value > 4} setRating={() => setValue(5)}/>
		</div>
	);
};

export default UncontrolledRating;
