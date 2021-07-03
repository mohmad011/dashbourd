import React, {useState, useEffect} from 'react';
import Discord from './RightBox/Discord';
import Download from './RightBox/Download';
import License from './RightBox/License';
import Transfer from './RightBox/Transfer';
import SendEmail from './RightBox/SendEmail';
import ListEmail from './RightBox/ListEmail';


// <SendEmail />
// <ListEmail />

const ProductInfo = () => {

	const [showSendEmail , setShowSendEmail] = useState(" ");
	const [showListEmail , setShowListEmail] = useState(false);
	const [email , setEmail] = useState(" ");
	const [disabledSend , setDisabledSend] = useState(false);
	const [current , setCurrent] = useState(" ")
	const [cancel , setCancel] = useState(" ")

	const showSendEmailHandler = () => {
		setShowSendEmail({
			showSendEmail: "anim"
		})
	}

	const UpdateEmailHandler = (e) => {
		setEmail(e.target.value)
	}

	useEffect(() => {
		if(email){
			setDisabledSend(false);
			// setEmail(" ");
		}else{
			setDisabledSend(true)
		}
	},[email])

	const onSubmitHandler = (e) => {
		e.preventDefault()
	}

	const CancelHandler = (e) => {
		e.preventDefault()
		setShowSendEmail({
			showSendEmail: " "
		})
		setEmail(" ");
	}

	console.log(disabledSend , email)

	return (
		<div className="ProductInfo">
			<Discord />
			<Download />
			<License />
			<Transfer showSendEmailHandler={showSendEmailHandler} />
			<SendEmail 
					UpdateEmailHandler={UpdateEmailHandler}
					onSubmitHandler={onSubmitHandler}
					email={email}
					showSendEmail={showSendEmail}
					CancelHandler={CancelHandler}
					disabledSend={disabledSend}
				/>
			

			{showListEmail ? <ListEmail /> : null}
		</div>
	);
}

export default ProductInfo;
