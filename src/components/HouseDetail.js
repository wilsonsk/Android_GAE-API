import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import { Card, CardSection, Button } from './common';

const HouseDetail = ({ house }) => {
	const { mainContainerStyle, containerStyle, contentStyle } = styles;


	return(
		<Card>
			<CardSection style={{flex: 1}}>
				<View style={containerStyle}>
					<Text>
						{JSON.stringify(house.name)}
					</Text>
				</View>
			</CardSection>
			<CardSection>
				<Button onPress={ () => alert(JSON.stringify(house)) }> 
					show house name
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	containerStyle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
};

export default HouseDetail;
