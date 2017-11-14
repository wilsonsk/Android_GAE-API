import React, { Component } from 'react';
import { View, Text } from 'react-native';

import LoginForm from '../../components/LoginForm';

class Auth extends Component <{}> {
	constructor(props){
		super(props);
		this.state = {
			isLoggedIn: this.props.isLoggedIn,
			data: []
		}
	}

	componentDidMount(){
		if(this.state.isLoggedIn === false){
			this._authConfig();
		}
	}

	loginButtonOnPress(){
		this.props.loginSuccessCB();
	}

	_authConfig(){
		try{
			console.log('where firebase auth happens');
		}catch(err){
			alert(err);
		}
	}

	renderLoginForm() {
		if (this.state.isLoggedIn === false){
			return(	
				<LoginForm onPress={this.loginButtonOnPress.bind(this)}/>
			);
		}else{
			return null;
		}
	}

	render(){
		
		return(
			<View style={styles.containerStyle} >
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
