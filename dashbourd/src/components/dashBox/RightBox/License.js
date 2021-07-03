import React, {useState, useEffect} from 'react';


const License = () => {
  return (
    <div className="License">
    	<div className="boxKey">
	    	<span className="title-key">License Key</span>
	    	<div className="boxIcon">
		    	<span className="key">XXXX - XXXX - XXXX - XXXX</span>
		    	<i className="fa fa-eye-slash fa-lg"></i>
	    	</div>
    	</div>
    	<div className="box">
    		<span className="renew">Renew Now</span>
    		<span className="stripe">Stripe</span>
    	</div>
    	<button className="deactive">Deactive</button>
    	<span className="next">Next Renewal on 22 Mar 2021</span>
    </div>
  );
}

export default License;
