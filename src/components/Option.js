import React from 'react';

 const Option = (props) => (
    <div className="option">
    <p>{props.count}. {props.optionText}</p>
    
    <button className="btn button button--link" 
    onClick={(e) => {
        props.handleDeleteOption(props.optionText)
    }}
    >
    Remove
    </button>
    </div>
 )
export default Option;