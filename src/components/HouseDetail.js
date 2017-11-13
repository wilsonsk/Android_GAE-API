import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import { Card, CardSection, Button } from './common';

const HouseDetail = ({ house }) => {
//	const { name } = house;

	return(
		<Card>
			<CardSection>
				<View>
					<Text>
						{JSON.stringify(house)}	
					</Text>
				</View>
			</CardSection>
			<CardSection>
				<Button onPress={ () => alert({house}) }>
					show house name
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {

};

export default HouseDetail;
