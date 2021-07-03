import React, {useState, useEffect} from 'react';
// import NavBar from './Nav/NavBar';
// import ListProduct from './Products/ListProduct';

const InfoProducts = (props) => {

	const {date ,name ,rate , footlocker ,price , state} = props;

	return (
		<div className="infoProducts">
			<span className="date">{date}</span>
			<span className="name">{name}</span>
			<span className="rate">{rate}</span>
			<span className="Footlocker">{footlocker}</span>
			<span className="price">{price}</span>
			<span className="state">{state}</span>
		</div>
	);
}

export default InfoProducts;
