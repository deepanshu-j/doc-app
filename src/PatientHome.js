import React, { useState } from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

import { Input } from '@material-ui/core';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, withRouter } from 'react-router-dom';

import './PatientHome.css';
// import AttachmentIcon from '@material-ui/icons/Attachment';

const ConditionalSvg = styled.div`display: ${({ searchValue }) => (searchValue !== '' ? 'block' : 'none')};`;

function PatientHome() {
	const [ input, setInput ] = useState('');
	let history = useHistory();

	// const [ searchValue, setSearchValue ] = useState('');
	// const [ focused, setFocused ] = useState(false);
	// const { register, handleSubmit, getValues, setValue } = useForm();
	return (
		<div className="search__container__view">
			<div className="search__container">
				<div className="search__container__input__container">
					<div className="chat__footer__parent">
						<div className="chat__footer">
							<SearchOutlined color={'#1e88e5'} style={{ paddingLeft: '8px' }} />
							<form className="chat__footerForm">
								<Input
									value={input}
									onChange={(e) => {
										setInput(e.target.value);
									}}
									type="text"
									className="chat__footerInput"
									placeholder="Search Doctor..."
								/>
								<button type="submit">send a message</button>
							</form>
						</div>
					</div>
				</div>

				<div className="search__container__results__container">
					{!input.length ? (
						<div className="no__prev__res">
							{/* <AccessTimeFilledIcon /> */}
							No Previous Result
						</div>
					) : (
						''
					)}
					{input.length ? (
						<div className="search__res__container">
							<div
								className="search__res"
								onClick={() => {
									history.push('/appointment-home');
								}}
							>
								<div className="search__res__icon">
									<MenuIcon />
								</div>

								<div className="search__res__name">Dr. Pradeep Sinha</div>
							</div>
							<div
								className="search__res"
								onClick={() => {
									history.push('/appointment-home');
								}}
							>
								<div className="search__res__icon">
									<MenuIcon />
								</div>

								<div className="search__res__name">Dr. Pranjal Patel</div>
							</div>
							<div
								className="search__res"
								onClick={() => {
									history.push('/appointment-home');
								}}
							>
								<div className="search__res__icon">
									<MenuIcon />
								</div>

								<div className="search__res__name">Dr. Pratap Mishra</div>
							</div>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}

export default withRouter(PatientHome);

export const SearchRes = withRouter(({ name }) => {
	return (
		<div className="search__res">
			<div className="search__res__icon">
				<MenuIcon />
			</div>

			<div className="search__res__name">{name}</div>
		</div>
	);
});

/* <div className="patient__right">
			<div className="sidebar__search">
				<div
					className="sidebar__searchContainer "
					style={{ border: `${focused ? '1.7px' : '1.3px'} solid ${focused ? '#69b9f0' : 'black'}` }}
				>
					<SearchOutlined />
					<input
						type="text"
						placeholder="Search Doctor..."
						name="search"
						defaultValue=""
						// ref={register}
						onChange={() => {
							console.log(getValues());
							setSearchValue(getValues().search);
						}}
						onFocus={() => {
							setFocused(true);
							console.log('focused');
						}}
						onBlur={() => {
							setFocused(false);
							console.log('focusedOut');
						}}
					/>
					<ConditionalSvg
						searchValue={searchValue}
						onClick={() => {
							setValue('search', '');
							setSearchValue('');
						}}
					>
						<CloseIcon />
					</ConditionalSvg>

					<button type="submit"> Search </button>
				</div>
			</div>
			<div>
				<Calendar onChange={onChange} value={value} />
			</div>
		</div> */
