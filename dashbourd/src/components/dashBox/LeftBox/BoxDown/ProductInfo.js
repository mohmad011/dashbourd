import React, {useState, useEffect} from 'react';
import NavBar from './Nav/NavBar';
import ListProduct from './Products/ListProduct';

const ProductInfo = () => {
  return (
    <div className="ProductInfo">
    	<NavBar />
    	<ListProduct />
    </div>
  );
}

export default ProductInfo;
