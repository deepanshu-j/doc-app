import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import './Home.css';
import { UserContext } from './ContextProvider';
import DoctorHome from './DoctorHome';
import PatientHome from './PatientHome';
import { useHistory } from 'react-router-dom';

import wave from './assets/wave.svg';
import blob from './assets/blob.svg';
import doc1 from './assets/doctor1.jpg';
import doc2 from './assets/doc2.jpg';
import doc3 from './assets/doc3.jpg';

function Home(props) {
	const { user, updateType } = useContext(UserContext);
	let history = useHistory();
	// console.log(myUser);
	// const { type } = useContext(UserContext);
	// console.log(type);
	return (
		<div className="home__view">
			<div className="view__header">Reducing The Queue and Chaos outside Clinics</div>
			<div className="view blob__background">
				<section className="card">
					<span className="heading">For Doctors</span>
					<Button
						style={{ backgroundColor: '#3ED625', width: '60%', color: 'white' }}
						onClick={() => {
							updateType('doctor');
							history.push('/doctor');
						}}
					>
						Sign In as Doctor
					</Button>
				</section>
				<section className="card">
					<span className="heading">For Patients</span>
					<Button
						variant="outlined"
						style={{ backgroundColor: '#fce205', width: '60%', color: 'white' }}
						onClick={() => {
							updateType('patient');
							history.push('/patient');
							// console.log(type);
						}}
					>
						Sign In as Patient
					</Button>
				</section>
			</div>
			<img src={wave} />
			<div className="blue__section">
				<h2 className="top__doctors__text"> TOP DOCTORS</h2>
				<div className="review__cards">
					<section className="blue__section__card">
						<span className="blue__section__card__heading">Dr. Grace John</span>
						<img
							src={doc1}
							style={{
								// objectFit: 'scale-down',
								width: '30vh',
								height: '30vh',
								borderRadius: '50%'
							}}
						/>
						<div className="desc">
							Dr. Grace did a great job with my first ever health exam. She explained everything to me in
							a very clear manner.
						</div>
					</section>
					<section className="blue__section__card">
						<span className="blue__section__card__heading">Dr. Pandit Kumar</span>
						<img
							src={doc2}
							style={{
								// objectFit: 'scale-down',
								width: '30vh',
								height: '30vh',
								borderRadius: '50%'
							}}
						/>
						<div className="desc">
							The services that I receive from Dr. Pandit Kumar is excellent. He and the staff are
							friendly and ensure that I am properly informed about my health and care
						</div>
					</section>
					<section className="blue__section__card">
						<span className="blue__section__card__heading">Dr. Leela Bansal</span>
						<img
							src={doc3}
							style={{
								// objectFit: 'scale-down',
								width: '30vh',
								height: '30vh',
								borderRadius: '50%'
							}}
						/>
						<div className="desc">
							Dr. Leela Bansal gets it. From his excellent treatment, curiosity, investigative mind and
							ability to connect, you know where you stand immediately and what next steps look like.
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Home;
// switch (user.type) {
//     case '':
//         return (
//             <div className="view">
//                 <section className="card">
//                     <span className="heading">For Doctors</span>
//                     <Button
//                         style={{ backgroundColor: 'rgb(8,146,208)', width: '60%' }}
//                         onClick={() => {
//                             updateType('doctor');
//                             history.push('/doctor');
//                         }}
//                     >
//                         Sign In as Doctor
//                     </Button>
//                 </section>
//                 <section className="card">
//                     <span className="heading">For Patients</span>
//                     <Button
//                         variant="outlined"
//                         style={{ backgroundColor: 'rgb(8,146,208)', width: '60%' }}
//                         onClick={() => {
//                             updateType('patient');
//                             history.push('/patient');
//                             // console.log(type);
//                         }}
//                     >
//                         Sign In as Patient
//                     </Button>
//                 </section>
//                 {/* {user.type} */}
//             </div>
//         );
//     case 'doctor':
//         return <DoctorHome />;

//     case 'patient':
//         return <PatientHome />;
// }
