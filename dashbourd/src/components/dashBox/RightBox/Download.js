import React, {useState, useEffect} from 'react';


const Download = () => {
  return (
    <div className="Download">
    	<div className="box_icon">
    		<i className="fa fa-desktop fa-5x"></i>
    		<span className="Destop_App">Destop App</span>
    	</div>
    	<span className="mac">
			<i className="fa fa-apple fa-lg"></i>
    		<span>Download For MacOS</span>
    	</span>
    	<span className="windows">
    		<i className="fa fa-windows fa-lg"></i>
    		<span>Download For Windows</span>
    	</span>
    </div>
  );
}

export default Download;
