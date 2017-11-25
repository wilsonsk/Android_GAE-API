import React, { Component } from 'react';
import { FlatList, View, Text, Image, Linking } from 'react-native';

import { Card, CardSection, Button } from './common';

class HouseDetail extends Component<{}> {
	constructor(props){
		super(props);
		this.state = {
			houses: this.props.houses
		}
	}

	renderDetails(){
		if(this.state.houses !== null){
			return(
				<View style={styles.flx1}>
					<FlatList
						style={styles.flx1}
						data={this.state.houses}
						extraData={this.state}
						keyExtractor={item => item.address}
						renderItem={({ item }) => 
							<Card>
								<CardSection style={{flex: 1}}>
									<View style={styles.containerStyle}>
										<Text>
											Listing ID: {JSON.stringify(item.homeId)}
										</Text>
									</View>
								</CardSection>
								<CardSection>
									<View style={styles.containerStyle}>
										<Text>
											Address: {JSON.stringify(item.address)}
										</Text>
									</View>
								</CardSection>
								<CardSection>
									<View style={styles.containerStyle}>
										<Text>

											{JSON.stringify(item.headline)}
										</Text>
									</View>
								</CardSection>
								<CardSection>
									<View style={styles.containerStyle}>
										<Text>
											Square Feet: {JSON.stringify(item.squareFeet)}sq ft.
										</Text>
									</View>
									<View style={styles.containerStyle}>
										<Text>
											List Price: ${JSON.stringify(item.price)}
										</Text>
									</View>
								</CardSection>
								<CardSection>
									<Button onPress={ () => alert(JSON.stringify(item)) }> 
										show house 
									</Button>
								</CardSection>
							</Card>
						}		
		
					/>
				</View>
			);
		}else{
			return <Card />
		}
	}

	render(){
		return(
			<View style={styles.flx1}>
				{this.renderDetails()}
			</View>
		);
	}
};

const styles = {
	containerStyle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	flx1: {
		flex: 1,
	}
};

export default HouseDetail;
