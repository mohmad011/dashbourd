import React, {useState, useEffect} from 'react';
import Filter from './BoxUpper/Filter';
import Checkout from './BoxUpper/Checkout'
import Failure from './BoxUpper/Failure'

const UpperComponent = () => {
  return (
    <div className="UpperComponent">
    	<Filter />
    	<Checkout />
    	<Failure />
    </div>
  );
}

export default UpperComponent;
