import React from 'react';
import { View, Text } from 'react-native';

const DisplayApi = (props) => {
	const { container, content } = styles;
	if(props.status === true){
		return(
			<View style={container}>
				<Text style={content}>
					Loading...
				</Text>
			</View>
		);
	}

	return(
		<View style={container}>
			<Text style={content}>
				{JSON.stringify(props.data)}
			</Text>
		</View>
	);
};

const styles = {
	container: {
		flex: 1
	},
	content: {
		flex: 1
	}
};

export default DisplayApi;
