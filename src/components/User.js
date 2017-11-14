import React from 'react';
import { Text, View } from 'react-native';

const User = (props) => {
	const { container, content } = styles;

	return(
		<Text style={content} >
			User: {JSON.stringify(props.user.email)}
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

export default User;
