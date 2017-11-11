import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import SessionStatus from '../../components/SessionStatus';

class OAuth extends Component <{}> {
	constructor(props){
		super(props);
		this.state = {
			hasPlay: false,
			configIsValid: false,
			isLoggedIn: this.props.isLoggedIn,
			data: []
		}
	}

	componentDidMount(){
		if(this.state.isLoggedIn === false){
			this._oauthConfig();
		}
	}

	async _oauthConfig(){
		try{
			await GoogleSignin.hasPlayServices({ autoResolve: true });
			await GoogleSignin.configure({
				webClientId: "505248232602-593ge8k5au4vleot8g1l11bs6k9iq5tm.apps.googleusercontent.com",
			});
			await GoogleSignin.signIn();
			await GoogleSignin.currentUserAsync().then((user) => {
				alert('user: ' + user);
				this.props.logInSuccessCB();
			});


		}catch(err){
			alert(err);
		}
	}

	render(){
		return(
			<SessionStatus loggedInStatus={String(this.state.isLoggedIn)} />
		);
	}

}

const styles = {
	container: {
		flex: 1
	}
};

export default OAuth;
