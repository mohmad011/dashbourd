import React, {useState, useEffect} from 'react';
import Noti from './box/Noti';
import Name from './box/Name'

const NotiWithName = () => {
  return (
    <div className="NotiWithName">
    	<Noti />
    	<Name />
    </div>
  );
}

export default NotiWithName;
