import React, {useState, useEffect} from 'react';
import UpperComponent from './LeftBox/UpperComponent';
import DownComponent from './LeftBox/DownComponent'

const LeftComponent = () => {
  return (
    <div className="LeftComponent">
    	<UpperComponent />
    	<DownComponent />
    </div>
  );
}

export default LeftComponent;
