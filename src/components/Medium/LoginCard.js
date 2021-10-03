import React, { useContext, useState } from 'react';
import './LoginCard.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
import 'react-phone-input-2/lib/bootstrap.css';
import { UserContext } from '../../ContextProvider';

function LoginCard() {
	const { user } = useContext(UserContext);
	let history = useHistory();
	const [ phone, setPhone ] = useState(0);
	return (
		<div className="login__container">
			{' '}
			<div className="header__text">Please Enter your Mobile Number for OTP verification</div>
			<div className="login__body">
				<div className="login__card">
					<PhoneInput country={'in'} value={phone} onChange={(phone) => setPhone(phone)} />
				</div>
				<Button
					style={{ backgroundColor: 'rgb(40,167,69)', width: '30%', color: 'white' }}
					onClick={() => {
						// updateType('doctor');// check from backend if the doctor is verified
						{
							user.type === 'doctor' ? history.push('/dashboard') : history.push('/appointment');
						}
					}}
				>
					Please Click To Verify
				</Button>
			</div>
		</div>
	);
}

export default LoginCard;
