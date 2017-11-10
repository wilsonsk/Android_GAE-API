import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


// Import custom RN components/containers
import DisplayApi from './components/DisplayApi';
import DisplayOauth from './components/DisplayOauth';

class App extends Component<{}> {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			oauthIsValid: false,
			oauthData: [],
			apiData: [],
			hasPlay: false
		}
		
	}

	componentDidMount() {
		return fetch('https://rest-api-implementation-183317.appspot.com/boats')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					apiData: responseJson
				}, () => {
					this._setupOauthConfig();
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	async _setupOauthConfig(){
		try{
			await GoogleSignin.hasPlayServices({ autoResolve: true });
			await GoogleSignin.configure({
				webClientId: "505248232602-593ge8k5au4vleot8g1l11bs6k9iq5tm.apps.googleusercontent.com",
				scopes: ["https://www.googleapis.com/plus/v1/people/me"]
			})
			await GoogleSignin.signIn();
			await GoogleSignin.getAccessToken();
			GoogleSignin.currentUserAsync().then((user) => {
				alert('user: ' + user);
			});


		}catch(err){
			alert(err);
		}
	}

	render(){
		return(
			<View style={{flex: 1}}>
				<DisplayOauth oauthData={this.state.oauthData} validOauth={this.state.oauthIsValid} />
				<DisplayApi data={this.state.apiData} status={this.state.isLoading} />
			</View>
		);
	}
}

export default App;
