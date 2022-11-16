import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';

import Home from './MainHome';
import Main from './MainStack';
import Auth from './AuthStack';
import Loading from '../screens/utils/Loading';

export default () => {
	const auth = useContext(AuthContext);
	const user = auth.user;
	return (
		<NavigationContainer>
			{user == null && <Loading />}
			{user == false && <Home />}
			{user == true && <Main />}
		</NavigationContainer>
	);
};
