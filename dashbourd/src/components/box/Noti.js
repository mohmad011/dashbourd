import React, {useState, useEffect} from 'react';
import Moment from 'react-moment';
// import Noti from './box/Noti';
// import Name from './box/Name'

const Noti = () => {
	const localDate = localStorage.getItem("otherDate");
	const date = new Date();
	const otherDate = date;
	localStorage.setItem("otherDate" , date)
  return (

    <span className="Noti">
    	<i className="fa fa-bell fa-lg"></i>
    	<div className="subNoti">
    		<h4>Notifications</h4>


    		<div className="boxMail">
    			<span className="icon">
    				<i class="fa fa-check"></i>
    			</span>
    			<div className="boxInfo">
	    			<span className="infoMail">Transfer Link Confirmed</span> 
	    			<span> by mohmadailsia@gmail.com</span>
					<span className="date"><Moment fromNow>{localDate}</Moment></span>
    			</div>
    		</div>

    		<div className="boxMail">
    			<span className="icon">
    				<i class="fa fa-check"></i>
    			</span>
    			<div className="boxInfo">
	    			<span className="infoMail">Transfer Link Confirmed</span> 
	    			<span> by mohmadailsia@gmail.com</span>
					<span className="date"><Moment fromNow>{localDate}</Moment></span>
    			</div>
    		</div>


    		<div className="boxMail">
    			<span className="icon">
    				<i className="fa fa-envelope"></i>
    			</span>
    			<div className="boxInfo">
	    			<span className="infoMail">Confirmation Email Sent</span> 
	    			<span> to mohmadailsia@gmail.com</span>
					<span className="date"><Moment fromNow>{localDate}</Moment></span>
    			</div>
    		</div>
    	</div>
    </span>
  );
}

export default Noti;
