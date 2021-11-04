import React from 'react';

//Outsource next 3 to setupTests.js
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// Importing the components
import DoctorHome from './DoctorHome';
import PatientDetails from './components/Small/PatientDetails/PatientDetails';

describe('<DoctorHome />', () => {
	let component;
	beforeEach(() => {
		component = shallow(<DoctorHome />);
	});

	it('should render 0 <PatientDetails /> components before API fetch(in this case 5sec timeout)', () => {
		component.setProps({ count: 10 }); // Manually pass//change some prop//
		// similarly we have setState method to manually pass a state to check for test

		expect(component.find(PatientDetails)).toHaveLength(0);
		//we also have contain method to check if it contains certain compo or not
	});
	// it('should render 20 <PatientDetails /> components', () => {
	// 	const component = shallow(<DoctorHome />);
	// 	expect(component.find(PatientDetails)).toHaveLength(20);
	// });
});
