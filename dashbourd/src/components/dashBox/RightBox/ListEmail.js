import React, {useState, useEffect} from 'react';

const ListEmail = () => {
  return (
    <>
        <div className="Overlay"></div>
        <div className="ListEmail">
            <div className="boxList">
                <i className="fa fa-times fa-lg"></i>
                <div className="boxIcon">
                    <i className="fa fa-envelope-open fa-2x"></i>
                </div>
                <p className="Confirmation">Confirmation Email Sent</p>
                <p className="sendResult">
                    We Sent a link to <a href="#"> mohmadailsia@gmail.com </a>. Check the email to confirm the transfer
                </p>
                <p className="notConfirmation">Didn't get a confirmation email?</p>
                <p className="checkSpam">Check your spam or <button className="SendAgain"> Send Again </button> </p>
            </div>
        </div>
    </>
  );
}

export default ListEmail;
