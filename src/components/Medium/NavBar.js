import React, { useContext } from 'react';
import './NavBar.css';
import { UserContext } from '../../ContextProvider';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { LocalHospital } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

function NavBar() {
	const { user } = useContext(UserContext);
	let history = useHistory();
	return (
		<div>
			<div className="navbar">
				<div
					className="navbar__left"
					onClick={() => {
						history.push('/');
					}}
				>
					D O C T E R
					<LocalHospital />
				</div>
				<div className="navbar__right">
					<a className="docName" href="#">
						{user.type === '' ? '' : user.type === 'doctor' ? '@Dr. Prakash Gupta' : 'Mogli Singh'}
					</a>
					<a className="links" href="#">
						Appointment
					</a>
					<a className="links" href="#">
						Payments
					</a>
					<a className="links" href="#">
						Contact us
					</a>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
