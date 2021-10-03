import './App.css';
// import Login from './Login.js';
// import { useStateValue } from './StateProvider';
import DoctorHome from './DoctorHome';
import PatientHome from './PatientHome';
import Home from './Home';
import { Route, Switch, useHistory } from 'react-router-dom';
import LoginCard from './components/Medium/LoginCard';
import NavBar from './components/Medium/NavBar';
import AppointmentHome from './AppointmentHome';

function App() {
	const history = useHistory();
	return (
		<div className="App">
			<NavBar />
			<Switch>
				{' '}
				<Route exact path="/" component={Home} />
				<Route exact path="/doctor" component={LoginCard} />
				<Route exact path="/patient" component={LoginCard} />
				<Route exact path="/dashboard" component={DoctorHome} />
				<Route exact path="/appointment-home" component={AppointmentHome} />
				<Route exact path="/appointment" component={PatientHome} />
			</Switch>
			{/* <Home /> */}
		</div>
	);
}

export default App;
