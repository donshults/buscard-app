import React from 'react';

const Label = (props) => {
    return ( 
        <label for={props.key} data-test='label-component'>{props.title}</label>
     );
}
 
export default Label;