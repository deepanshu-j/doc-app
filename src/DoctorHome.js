import React, { useState, useEffect, useRef } from 'react';
import Chart from './components/Large/Chart/Chart';
import './DoctorHome.css';
import { Button } from '@material-ui/core';
import PatientDetails from './components/Small/PatientDetails/PatientDetails';
import { useReactToPrint } from 'react-to-print';

function DoctorHome() {
	const [ patientList, setPatientList ] = useState([]);
	function getCurrentDate(separator = '') {
		let newDate = new Date();
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`;
	}
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current
	});
	useEffect(() => {
		setTimeout(() => {
			setPatientList([
				{
					name: 'Name',
					age: 'Age',
					timeSlot: 'Time Slot',
					phone: 'Phone'
				},
				{
					name: 'Anupama Reddy',
					age: 27,
					timeSlot: '6:30-6:40',
					phone: 8882581891
				},
				{
					name: 'Vicky Sama',
					age: 23,
					timeSlot: '6:40-6:50',
					phone: 8882581892
				},
				{
					name: 'Varun Lal',
					age: 22,
					timeSlot: '6:50-7:00',
					phone: 8882581893
				},
				{
					name: 'Richa Thaker',
					age: 53,
					timeSlot: '7:00-7:10',
					phone: 8882581894
				},
				{
					name: 'Mowgli Aggarwal',
					age: 21,
					timeSlot: '7:10-7:20',
					phone: 8882581895
				},
				{
					name: 'Varun Wason',
					age: 21,
					timeSlot: '7:20-7:30',
					phone: 8882581896
				},
				{
					name: 'Deep Rajan',
					age: 29,
					timeSlot: '7:30-7:40',
					phone: 8882581897
				},
				{
					name: 'Himani Kunda',
					age: 25,
					timeSlot: '7:40-7:50',
					phone: 8882581898
				},
				{
					name: 'Anupama Reddy',
					age: 22,
					timeSlot: '7:50-8:00',
					phone: 8882581899
				}
			]);
		}, 2000);
	}, []);
	return (
		<div className="">
			<div className="doctor__home">
				<div>
					<Chart />
				</div>

				<div className="doc__home__right">
					<section className="appointment__card">
						<span className="heading1">Total Appointments Today</span>
						<div
							style={{
								borderLeft: '2px solid gray',
								height: '30px'
							}}
						/>
						<span className="num">19</span>
					</section>
					<section className="appointment__card2">
						<span className="heading2">Print Today's Patients List</span>

						<Button style={{ backgroundColor: 'rgb(215, 236, 251)' }} onClick={handlePrint}>
							Print
						</Button>
					</section>
				</div>
			</div>

			<div className="patients__list">
				{patientList.map((obj, idx) => {
					return (
						<PatientDetails
							key={idx}
							// className={`${clickedIdx===idx ?'purple':'normal'}`}
							// onClick={() => clickHandler(idx)}
							obj={obj}
							idx={idx}
							isTop={idx === 0 ? true : false}
						/>
					);
				})}
			</div>
			{/* style={{ display: 'none' }} */}
			<div style={{ display: 'none' }}>
				<div ref={componentRef}>
					<div style={{ textAlign: 'center' }}>Patient List</div>
					<div style={{ textAlign: 'center' }}>Date & Time: {new Date().toLocaleString() + ''}</div>

					<div className="patients__list">
						{patientList.map((obj, idx) => {
							return (
								<PatientDetails
									key={idx}
									// className={`${clickedIdx===idx ?'purple':'normal'}`}
									// onClick={() => clickHandler(idx)}
									obj={obj}
									idx={idx}
									isTop={idx === 0 ? true : false}
									isInvoice={true}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DoctorHome;
