import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, secureTextEntry }) => {
	const { containerStyle, labelStyle, inputStyle } = styles;

	return(
		<View style={containerStyle}>
			<Text style={labelStyle}>
				{label}
			</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeHolder={placeHolder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	containerStyle: {
		flex: 1,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center'
	},
	labelSyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	}
};

export { Input };
