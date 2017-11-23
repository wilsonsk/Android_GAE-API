import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Card, CardSection, Input, Button, Spinner } from '../../components/common';

class PostForm extends Component<{}> {
	constructor(props){
		super(props);
		this.state = {
			entityKey: '',
			userId: this.props.userId,
			address: '',
			headline: '',
			squareFeet: '',
			price: '',
		};
	};

	handleOnPress(){
		this.props.submitData(
			this.state.entityKey,
			this.state.userId,
			this.state.address,
			this.state.headline,
			this.state.squareFeet,
			this.state.price
		);
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Text>
						Hello Post Form
					</Text>
				</CardSection>
				<CardSection>
					<Input 
						placeHolder="abcde"
						label="ID"
						value={this.state.entityKey}
						onChangeText={(text) => this.setState({
							entityKey: text
						})}
					/>
					<Input 
						placeHolder="123 St."
						label="Address"
						value={this.state.address}
						onChangeText={(text) => this.setState({
							address: text
						})}
					/>
					<Input 
						placeHolder="2 Baths, 3 Bedroom"
						label="Headline"
						value={this.state.headline}
						onChangeText={(text) => this.setState({
							headline: text
						})}
					/>
					<Input 
						placeHolder="123 Sq."
						label="Square Footage"
						value={this.state.squareFeet}
						onChangeText={(text) => this.setState({
							squareFeet: text
						})}
					/>
					<Input 
						placeHolder="$550,000"
						label="Price"
						value={this.state.price}
						onChangeText={(text) => this.setState({
							price: text
						})}
					/>
				</CardSection>
				<CardSection>
					<Button onPress={() => this.handleOnPress()}>
						POST 
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export { PostForm };
