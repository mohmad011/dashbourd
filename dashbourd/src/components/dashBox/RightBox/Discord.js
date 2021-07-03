import React, {useState, useEffect} from 'react';


const Discord = () => {
  return (
    <div className="Discord">
    	<span className="discordBox">
		    <i className="fa fa-discord fa-lg"></i>
	    	<span className="discord_id">Discord ID</span>
    	</span>
    	<span className="name">antony#2142</span>
    	<button className="unbind">Unbind</button>
    </div>
  );
}

export default Discord;
