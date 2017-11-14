import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component<{}>{
	state = {
		email: '',
		password: '',
		isLoading: false
	};

	_loginSuccessCB(){
		return null;
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Text>
						Login
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
			</Card>
		);
	}
};

const styles = {
	container: {
		flex: 1,
	}
};

export default LoginForm;
