import React from 'react';
import {SelectItemsType} from '../Accordion';
import s from './AccordionBody.module.css';

type PropsType = {
  items: Array<SelectItemsType>
  setSelectTitle: (option: SelectItemsType) => void
  setCollapsed?: (collapsed: boolean) => void
}

function AccordionBody(props: PropsType) {
  const setTitleSelect = (item: SelectItemsType) => {
    props.setSelectTitle(item);

    if(props.setCollapsed) {
      props.setCollapsed(false);
    }
  }

  return (
    <ul className={s.list}>
      {props.items.map(i => {
        return <li className={s.item} onClick={() => setTitleSelect(i)}>{i.value}</li>
      })}
    </ul>
  );
}

export default AccordionBody;
