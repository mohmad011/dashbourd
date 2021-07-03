import React, {useState, useEffect} from 'react';

const SendEmail = (props) => {

	console.log(props.email)

  return (
    <>
    	<div className={props.showSendEmail.showSendEmail === "anim" ? "Overlay" : "Overlay hide"} ></div>
        <div className={props.showSendEmail.showSendEmail === "anim" ? "SendEmail anim" : "SendEmail"}>
        	<div className="boxForm">
        		<h2>Transfer</h2>
        		<form onSubmit={props.onSubmitHandler}>
        			<div className="boxInput">
        				<label>Transfer To</label>
        				<input type="email" value={props.email} placeholder="Enter Your Email..." onChange={props.UpdateEmailHandler} />
        			</div>
        			<div className="boxButton">
        				<button className="Cancel" onClick={props.CancelHandler}>Cancel</button>
        				<button type="submit" className="Send" disabled={props.disabledSend}>Send</button>
        			</div>
        		</form>
        	</div>
        </div>
    </>
  );
}

export default SendEmail;
