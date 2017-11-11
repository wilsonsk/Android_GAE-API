import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


// Import custom RN components/containers
import Header from './components/Header';
//import HouseList from './containers/HouseList';
import OAuth from './containers/api/OAuth';

class App extends Component<{}> {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			isLoggedIn: false,
		}
		
	}

	logInSuccessCB(){
		this.setState({
			isLoggedIn: true 
		})
	}

	render(){
		return(
			<View style={{flex: 1}}>
				<Header headerText={"Houses"} />
				<OAuth isLoggedIn={this.state.isLoggedIn} logInSuccessCB={() => this.logInSuccessCB()} />
			</View>
		);
	}
}

export default App;
