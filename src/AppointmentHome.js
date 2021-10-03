import React, { useState } from 'react';
import './AppointmentHome.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import styled from 'styled-components';
import { useTable } from 'react-table';
import makeData from './makeData';

import { Button } from '@material-ui/core';
import doc2 from './assets/doc2.jpg';

function Table({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data
	});

	// Render the UI for your table
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

const Styles = styled.div`
	padding: 1rem;

	table {
		border-spacing: 0;
		border: 1px solid black;
		border-radius: 4px;
		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}

		th,
		td {
			margin: 0;
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;

			:last-child {
				border-right: 0;
			}
		}
	}
`;

function AppointmentHome() {
	const [ value, onChange ] = useState(new Date());
    const [timeSlot, setTimeSlot]= useState('')
    const handleShow = (cell, date) => {
        console.log(cell?.row?.original[date], date);
		setTimeSlot(cell?.row?.original[date])
        
    }
    const styleBtn={
        backgroundColor: '#28a745',        
        border: 'none',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius:'2px',
        cursor:'pointer'
    }
	const styleBtnRed={
		backgroundColor: '#dc3545',        
        border: 'none',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius:'2px'
	}
	const columns = React.useMemo(
		() => [
			{
				Header: 'Pick Time Slot',
				columns: [
					{
						Header: '3 Oct 2021',
						accessor: '3 Oct 2021',
                        Cell: props => <button className="btn1" style={styleBtn}
                        onClick={() => handleShow(props,'3 Oct 2021')}>
                            {props?.row?.original['3 Oct 2021']}
                            </button>,
					},
					{
						Header: '4 Oct 2021',
						accessor: '4 Oct 2021',
                        Cell: props => <button className="btn1" style={styleBtn}
                        onClick={() => handleShow(props,'4 Oct 2021')}>
                            {props?.row?.original['4 Oct 2021']}
                            </button>,
					},
					{
						Header: '5 Oct 2021',
						accessor: '5 Oct 2021',
                        Cell: props => <button
						style={styleBtnRed}  
                        onClick={() => handleShow(props,'5 Oct 2021')}>
                            {props?.row?.original['5 Oct 2021']}
                            </button>,
					},
					{
						Header: '6 Oct 2021',
						accessor: '6 Oct 2021',
                        Cell: props => <button className="btn1" style={styleBtn}
                        onClick={() => handleShow(props,'6 Oct 2021')}>
                            {props?.row?.original['6 Oct 2021']}
                            </button>,
					},
					{
						Header: '7 Oct 2021',
						accessor: '7 Oct 2021',
                        Cell: props => <button className="btn1" style={styleBtn}
                        onClick={() => handleShow(props,'7 Oct 2021')}>
                            {props?.row?.original['7 Oct 2021']}
                            </button>,
					},
					{
						Header: '8 Oct 2021',
						accessor: '8 Oct 2021',
                        Cell: props => <button className="btn1" style={styleBtn}
                        onClick={() => handleShow(props,'8 Oct 2021')}>
                            {props?.row?.original['8 Oct 2021']}
                            </button>,
					},
					{
						Header: '9 Oct 2021',
						accessor: '9 Oct 2021',
                        Cell: props => <button className="btn1" style={styleBtn}
                        onClick={() => handleShow(props,'9 Oct 2021')}>
                            {props?.row?.original['9 Oct 2021']}
                            </button>,
					}
				]
			}
		],
		[]
	);
	const data = React.useMemo(
		() => [
			{
				'3 Oct 2021': '6:00-6:30PM',
				'4 Oct 2021': '6:00-6:30PM',
				'5 Oct 2021': '6:00-6:30PM',
				'6 Oct 2021': '6:00-6:30PM',
				'7 Oct 2021': '6:00-6:30PM',
				'8 Oct 2021': '6:00-6:30PM',
				'9 Oct 2021': '6:00-6:30PM'
			},
			{
				'3 Oct 2021': '6:30-7:00PM',
				'4 Oct 2021': '6:30-7:00PM',
				'5 Oct 2021': '6:30-7:00PM',
				'6 Oct 2021': '6:30-7:00PM',
				'7 Oct 2021': '6:30-7:00PM',
				'8 Oct 2021': '6:30-7:00PM',
				'9 Oct 2021': '6:30-7:00PM'
			},
			{
				'3 Oct 2021': '7:00-7:30PM',
				'4 Oct 2021': '7:00-7:30PM',
				'5 Oct 2021': '7:00-7:30PM',
				'6 Oct 2021': '7:00-7:30PM',
				'7 Oct 2021': '7:00-7:30PM',
				'8 Oct 2021': '7:00-7:30PM',
				'9 Oct 2021': '7:00-7:30PM'
			}
		],
		[]
	);
	return (<div>		
		<div className="view__top__cont">
		<div className="view__top">
			<div className="view__top__left">
			<img
							src={doc2}
							style={{
								// objectFit: 'scale-down',
								width: '30vh',
								height: '30vh',
								borderRadius: '50%'
							}}
						/>
			</div>
			<div className="view__top__mid">
				Dr. Prasad Kumar 
			</div>
			<div className="view__top__right">
			<div className="view__top__right__down">
					<b><i>Address:</i></b>  Digital Health Clinic
					No reviews · Diagnostic center
					New Delhi, Delhi · 080805 66586
				</div>
				<div className="view__top__right__top">
						MBBS, MD
				</div>
				<div className="view__top__right__mid">
					Neurology
				</div>
			
				
			</div>
		</div>
		</div>
		
		<div className="view">
			<div className="left">
				<div className="right__heading" style={{ color: 'black' }}>
					Pick Appointment Date
				</div>
				<Calendar onChange={onChange} value={value} />
			</div>
			<div className="right">
				<div>
					<span className="right__heading">Book Appointment For</span> {value.toDateString()}{' '}
					<span className="time">{ timeSlot.toString()}</span>
				</div>
				<div className="table__container">
					<Styles>
						<Table columns={columns} data={data} />
					</Styles>
				</div>
			</div>
		</div>
		<div className="view__down">
			<div className="left__down">
				<span className="form__header">Please Enter Your Details</span>
				<div className="form__cont">
					<div className="form__field">
						<div className="form__field__key">
		             	First Name
						</div>
						<div className="form__field__value">
							<input className="form__field__value__input" placeholder="Enter First Name"/>
						</div>
					</div>
					<div className="form__field">
						<div className="form__field__key">
		             	Last Name
						</div>
						<div className="form__field__value">
							<input className="form__field__value__input" placeholder="Enter Last Name"/>
						</div>
					</div>
					<div className="form__field">
						<div className="form__field__key">
		             	Age
						</div>
						<div className="form__field__value">
							<input className="form__field__value__input" placeholder="Enter Age"/>
						</div>
					</div>
					<div className="form__field">
						<div className="form__field__key">
		             	Phone
						</div>
						<div className="form__field__value">
							<input className="form__field__value__input" placeholder="Enter Phone"/>
						</div>
					</div>
					<div className="form__field">
						<div className="form__field__key">
		             	Address
						</div>
						<div className="form__field__value">
							<input className="form__field__value__input" placeholder="Enter Address"/>
						</div>
					</div>
				</div>

			</div>
			<div className="right__down">
				<div className="up">
					Please Click Below To confirm the Appointment and Initiate the Payment.
				</div>
				<div className="down">
				<Button
					style={{ backgroundColor: 'rgb(40,167,69)', width: '100%', color: 'white' }}
				>
					Book & Pay
				</Button>
				</div>
			</div>
		</div>
		</div>

	);
}

export default AppointmentHome;
