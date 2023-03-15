import React from 'react';
import s from "./OnOff.module.css";
import On from "./On/On";
import Off from "./Off/Off";

type PropsType = {
	select: boolean
	setSelect: (select: boolean) => void
}

const OnOff = (props: PropsType) => {
	const changeOnOffHandler = () => {
		props.setSelect(!props.select)
	}

	return (
		<div className={s.onOff} onClick={changeOnOffHandler}>
			{props.select ? <On/> : <Off/>}
		</div>
	)
};

export default OnOff;
