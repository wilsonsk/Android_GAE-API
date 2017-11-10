import React from 'react';
import { View, Text } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


const DisplayOauth = (props) => {
	const { container } = styles;
	
	if(props.validOauth === true){
		return(
			<View style={container}>
				<Text>
					{JSON.stringify(props.oauthData)}
				</Text>
			</View>
		);
	}
	
	
	return(
		<View style={container}>
			<Text>
				Not Valid
			</Text>
		</View>
	);
	
};

const styles = {
	container: {
		flex: 1
	}
};

export default DisplayOauth;
