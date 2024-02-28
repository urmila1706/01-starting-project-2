import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className="button" 
    style={{background:!props.valid ? '#FFCCCB':'#ac0e77' , 
             borderColor:!props.valid ?'#FFCCCB':'#ac0e77'}}
     onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
