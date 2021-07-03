import React, {useState, useEffect} from 'react';
import LeftComponent from './dashBox/LeftComponent';
import RightComponent from './dashBox/RightComponent'

const Dashbourd = () => {
  return (
    <div className="Dashbourd">
    	<LeftComponent />
    	<RightComponent />
    </div>
  );
}

export default Dashbourd;
