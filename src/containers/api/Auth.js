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

	_authConfig(){
		try{
			console.log('where firebase auth happens');
		}catch(err){
			alert(err);
		}
	}

	renderLoginForm() {
		// set to false for debuggin purposes (bypasses authorization); for production, set to true
		if (this.state.isLoggedIn === false){
			return(	
				<LoginForm />
			);
		}else{
			return null;
		}
	}

	render(){
		
		return(
			<View style={styles.container} >
				{this.renderLoginForm()}
			</View>
		);
	}
	
}

const styles = {
	container: {
		flex: 1
	}
};

export { Auth };
