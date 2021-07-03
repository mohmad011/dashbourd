import React, {useState, useEffect} from 'react';


const Transfer = (props) => {

  return (
    <div className="Transfer">
    	<span className="TransferBox">
		    <i className="fa fa-exchange fa-lg"></i>
	    	<span className="Transfer_name">Transfer</span>
    	</span>
    	<div className="currnet">
    		<span className="Currnet_Email">Currnet Email</span>
    		<span className="email">mohmadailsia@gmail.com</span>
    	</div>
    	<button onClick={props.showSendEmailHandler} className="Transfer_btn">Transfer To <i className="fa fa-angle-right fa-lg"></i> </button>
    </div>
  );
}

export default Transfer;
