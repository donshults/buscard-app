import React from 'react';
import classes from './Spinner.css';

const spinner = () => {
    return ( 
        <div className={classes.Loader} data-test='spinner-component'>Loading...</div>
     );
}
 
export default spinner;