import React, {useState, useEffect} from 'react';
// import InfoProducts from './Box/InfoProducts';
// import ListProduct from './Products/ListProduct';

const ListProduct = () => {

	// const [Prods , setProd] = useState([])
	// setProd([
	// 	{id:1, date:"22 Feb 2021" , name:"Jordan 11 Retro Jubilee" ,rate:9.0 , footlocker:"Footlocker UK" , price:'$211', state:"success"},
	// 	{id:2, date:"22 Feb 2021" , name:"Jordan 6 Retro Carmine(2021)" ,rate:10.0 , footlocker:"Footlocker UK" , price:'$252', state:"Fail"},
	// 	{id:1, date:"22 Feb 2021" , name:"Jordan 11 Retro Jubilee" ,rate:9.0 , footlocker:"Footlocker UK" , price:'$211', state:"success"},
	// 	{id:2, date:"22 Feb 2021" , name:"Jordan 6 Retro Carmine(2021)" ,rate:10.0 , footlocker:"Footlocker UK" , price:'$252', state:"Fail"},
	// 	{id:1, date:"22 Feb 2021" , name:"Jordan 11 Retro Jubilee" ,rate:9.0 , footlocker:"Footlocker UK" , price:'$211', state:"success"},
	// 	{id:2, date:"22 Feb 2021" , name:"Jordan 6 Retro Carmine(2021)" ,rate:10.0 , footlocker:"Footlocker UK" , price:'$252', state:"Fail"},
	// 	{id:1, date:"22 Feb 2021" , name:"Jordan 11 Retro Jubilee" ,rate:9.0 , footlocker:"Footlocker UK" , price:'$211', state:"success"},
	// 	{id:2, date:"22 Feb 2021" , name:"Jordan 6 Retro Carmine(2021)" ,rate:10.0 , footlocker:"Footlocker UK" , price:'$252', state:"Fail"},
	// 	{id:1, date:"22 Feb 2021" , name:"Jordan 11 Retro Jubilee" ,rate:9.0 , footlocker:"Footlocker UK" , price:'$211', state:"success"},
	// 	{id:2, date:"22 Feb 2021" , name:"Jordan 6 Retro Carmine(2021)" ,rate:10.0 , footlocker:"Footlocker UK" , price:'$252', state:"Fail"},

	// ])

	// console.log(Prods)

	// const newProduct = Prods.map(prod => {
	// 	return(
	// 		<InfoProducts
	// 			key={prod.id}
	// 			date={prod.date}
	// 			name={prod.name}
	// 			rate={prod.rate}
	// 			footlocker={prod.footlocker}
	// 			price={prod.price}
	// 			state={prod.state}
	// 		/>
	// 	)
	// }) {newProduct}

	return (
		<div className="ListProduct">
			
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 11 Retro Jubilee</span>
				<span className="rate">9.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$211</span>
				<span className="state">success</span>
			</div>
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 6 Retro Carmine(2021)</span>
				<span className="rate">10.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$252</span>
				<span className="state fail">Fail</span>
			</div>
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 6 Retro Carmine(2021)</span>
				<span className="rate">10.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$252</span>
				<span className="state fail">Fail</span>
			</div>
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 11 Retro Jubilee</span>
				<span className="rate">9.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$211</span>
				<span className="state">success</span>
			</div>

			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 11 Retro Jubilee</span>
				<span className="rate">9.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$211</span>
				<span className="state">success</span>
			</div>
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 6 Retro Carmine(2021)</span>
				<span className="rate">10.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$252</span>
				<span className="state fail">Fail</span>
			</div>
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 6 Retro Carmine(2021)</span>
				<span className="rate">10.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$252</span>
				<span className="state fail">Fail</span>
			</div>
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 11 Retro Jubilee</span>
				<span className="rate">9.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$211</span>
				<span className="state">success</span>
			</div>
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 11 Retro Jubilee</span>
				<span className="rate">9.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$211</span>
				<span className="state">success</span>
			</div>
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 6 Retro Carmine(2021)</span>
				<span className="rate">10.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$252</span>
				<span className="state fail">Fail</span>
			</div>
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 6 Retro Carmine(2021)</span>
				<span className="rate">10.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$252</span>
				<span className="state fail">Fail</span>
			</div>
			<div className="infoProducts">
				<span className="date">22 Feb 2021</span>
				<span className="name">Jordan 11 Retro Jubilee</span>
				<span className="rate">9.0</span>
				<span className="Footlocker">Footlocker UK</span>
				<span className="price">$211</span>
				<span className="state">success</span>
			</div>
			
		</div>
	);
}

export default ListProduct;
