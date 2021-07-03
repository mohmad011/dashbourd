import React, {useState, useEffect} from 'react';
// import UpperComponent from './LeftBox/UpperComponent';
// import DownComponent from './LeftBox/DownComponent'

const Filter = () => {
  return (
    <div className="Filter">
    	<span className="by">Filter by:</span>
    	<span className="d1">1D</span>
    	<span className="m1 active">1M</span>
    	<span className="y1">1Y</span>
    </div>
  );
}

export default Filter;
