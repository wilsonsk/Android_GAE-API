import React from 'react';
import { View, Text } from 'react-native';

const SessionStatus = (props) => {
	const { container, content } = styles;

	return(
		<View style={container} >
			<Text style={content} >
				User Logged In Status: {props.loggedInStatus}
			</Text>
		</View>
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

export default SessionStatus;
