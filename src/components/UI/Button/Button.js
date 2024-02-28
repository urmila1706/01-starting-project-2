import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type}  
    //style={{background:!props.valid ? '#FFCCCB':'#ac0e77' , 
            // borderColor:!props.valid ?'#FFCCCB':'#ac0e77'}}
             className={`button ${!props.valid ? "invalid" : " "}`}
       
     onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
