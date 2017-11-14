import React from 'react';
import { Text, View } from 'react-native';

const LoginStatus = (props) => {
	const { container, content } = styles;

	return(
		<Text style={content} >
			User Logged In Status: {String(props.loginStatus)}
		</Text>
	);
};

const styles = {
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
	}
};

export default LoginStatus;
