import React, {useState} from "react";
import s from './OnOff.module.css';
import On from "./On/On";
import Off from "./Off/Off";

const UncontrolledOnOff = () => {
	const [select, setSelect] = useState(true);

	const changeSelect = () => {
		setSelect(!select);
	}

	return (
		<div className={s.onOff} onClick={changeSelect}>
			{select ? <On/> : <Off/>}
		</div>
	)
}

export default UncontrolledOnOff;
