import React, {useState, useEffect} from 'react';
// import UpperComponent from './LeftBox/UpperComponent';
// import DownComponent from './LeftBox/DownComponent'

const Failure = () => {
  return (
    <div className="Failure">
    	<div className="info">
    		<span className="totle">Total Failure</span>
    		<span className="average">10 </span>/82
    	</div>
    	<div className="icon">
    		<div>
    			<i className="fa fa-cart-plus fa-2x"></i>
    		</div>
    	</div>
    </div>
  );
}

export default Failure;
