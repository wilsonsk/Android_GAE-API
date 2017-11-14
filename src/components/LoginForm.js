import React from 'react';
import { View, Text } from 'react-native';

import Input from './common';

const LoginForm = (props) => {
	return(
		<View style={styles.container}>
			<Text>
				LoginForm
			</Text>
		</View>
	);
};

const styles = {
	container: {
		flex: 1,
	}
};

export default LoginForm;
