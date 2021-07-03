import React, {useState, useEffect} from 'react';
// import UpperComponent from './LeftBox/UpperComponent';
// import DownComponent from './LeftBox/DownComponent'

const Checkout = () => {
  return (
    <div className="Checkout">
    	<div className="info">
    		<span className="totle">Total Checkouts</span>
    		<span className="average">72 </span>/82
    	</div>
    	<div className="icon">
    		<div>
    			<i className="fa fa-cart-plus fa-2x"></i>
    		</div>
    	</div>
    </div>
  );
}

export default Checkout;

