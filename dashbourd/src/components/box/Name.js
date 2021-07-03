import React, {useState, useEffect} from 'react';
import imgMohmad from '../../mohmad.jpg'
// import Noti from './box/Noti';
// import Name from './box/Name'

const Name = () => {
  return (
    <span className="Name">
    	<img src={imgMohmad} alt="mohmad" />
    	<h3>mohmad gamal</h3>
    	<p>mohmadailsia@gmail.com</p>
    	<i className="fa fa-angle-down" aria-hidden="true"></i>
    </span>
  );
}

export default Name;
