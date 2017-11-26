import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { LoginForm } from '../forms';

class Auth extends Component <{}> {
	constructor(props){
		super(props);
		this.state = {
			isLoggedIn: this.props.isLoggedIn,
			authErrorMesage: '',
			user: {},
			isLoading: false
		}
	}

	componentDidMount(){
		if(this.state.isLoggedIn === false){
			this._authConfig();
		}
	}

	loginButtonOnPress(email, password){
		this.setState({
			authErrorMessage: '',
			isLoading: true
		})
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => {
				alert("Welcome back, " + user.email);
				this.setState({
					isLoading: false
				});
				this.props.loginSuccessCB(user);
			})
			.catch((err) => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then((user) => {
						alert("Welcome, new account created.");
						this.setState({
							isLoading: false
						});
						this.props.loginSuccessCB(user);
					});
			
			});
			
	}

	_authConfig(){
		try{
			firebase.initializeApp({
				apiKey: "AIzaSyC3x7RPB2dKOF7Cf2TEjZvJ5yuv0kHhOqc",
				apiKey: "AIzaSyC3x7RPB2dKOF7Cf2TEjZvJ5yuv0kHhOqc",
				authDomain: "fir-auth-917d6.firebaseapp.com",
				databaseURL: "https://fir-auth-917d6.firebaseio.com",
				projectId: "fir-auth-917d6",
				storageBucket: "",
				messagingSenderId: "590748645411"
			});
		}catch(err){
			alert(err);
		}
	}

	renderAuthError(){
		return(
			<Text>{this.state.authErrorMessage}</Text>
		);
	}

	renderLoginForm() {
		if (this.state.isLoggedIn === false){
			return(	
				<LoginForm isLoading={this.state.isLoading} onPress={this.loginButtonOnPress.bind(this)}/>
			);
		}else{
			return null;
		}
	}

	render(){
		
		return(
			<View style={styles.containerStyle} >
				{this.renderAuthError()}
				{this.renderLoginForm()}
			</View>
		);
	}
	
}

const styles = {
	containerStyle: {
		flex: 1,
	}
};

export { Auth };
