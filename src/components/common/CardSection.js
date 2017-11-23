import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return(
		<View style={styles.container} >
			{props.children}
		</View>
	);
};

const styles = {
	container: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		flexWrap: 'wrap',
		borderColor: '#ddd',
		overflow: 'scroll',
		position: 'relative'
	}
};

export { CardSection };
