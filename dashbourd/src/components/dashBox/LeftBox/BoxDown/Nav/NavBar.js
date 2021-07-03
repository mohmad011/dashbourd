import React, {useState, useEffect} from 'react';
// import NavBar from './Nav/NavBar';
// import ListProduct from './Products/ListProduct';

const NavBar = () => {
  return (
    <div className="NavBar">
    	<div className="date">
			<span>DATE</span>
			<div className="icon">
	    		<i className="fa fa-angle-up"></i>
				<i className="fa fa-angle-down"></i>
			</div>
    	</div>
    	<div className="product">
    		<span>Product</span>
    	</div>
    	<div className="size">
    		<span>SIZE (US)</span>
    	</div>
    	<div className="website">
    		<span>WEBSITE</span>
    	</div>
    	<div className="price">
    		<span>Price</span>
    	</div>
    	<div className="status">
    		<span>STATUS</span>
    	</div>
    </div>
  );
}

export default NavBar;
