import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			isLoading: false
		}
	};

	renderButton(){
		return(
			<Button onPress={() => this.props.onPress(this.state.email, this.state.password)}>
				Log In	
			</Button>
		);
	}

	render(){
		return(
			<Card>
				<CardSection style={styles.containerStyle}>
					<Text>
						Welcome
					</Text>
				</CardSection>
				<CardSection>
					<Input
						placeHolder="email@email.com"
						label="Email"
						value={this.state.email}
						onChangeText={(text) => this.setState({ email: text })}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						placeHolder="password"
						label="Password"
						value={this.state.password}
						onChangeText={(text) => this.setState({ password: text })}
					/>
				</CardSection>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
};

const styles = {
	containerStyle: {
	}
};

export default LoginForm;
