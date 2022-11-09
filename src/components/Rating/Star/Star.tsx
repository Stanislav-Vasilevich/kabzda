import React from 'react';

type PropsType = {
  selected: boolean
}

function Star(props: PropsType) {
  if(props.selected) {
    return <>&#9733;</>;
  } else {
    return <>&#9734;</>;
  }
}

export default Star;
