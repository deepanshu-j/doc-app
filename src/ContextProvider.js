import React, { createContext, useState } from 'react';

const initState = { type: '', age: 0 };

export const UserContext = createContext();

export const UserProvider = (props) => {
	//State of this Component//
	const [ user, setUser ] = useState(initState); //Currently the naming is wrong this represents the type of user//
	// i.e doc or pateint//

	//Methods of this component//
	const updateType = (newVal) => {
		// setUser(e.target.value);
		setUser({ ...user, type: newVal });
		console.log('new User: ', user);
	};

	return <UserContext.Provider value={{ user, updateType }}>{props.children}</UserContext.Provider>;
};

// export const useStateValue = () => useContext(UserContext);
