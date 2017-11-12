import React, { Component } from 'react';
import { View, Text } from 'react-native';


// Import custom RN components/containers
import { Header } from './components/common';
import { Auth, HouseList } from './containers/api';

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
				<Auth isLoggedIn={this.state.isLoggedIn} style={{flex: 1}} >
					<HouseList isLoggedIn={this.state.isLoggedIn} />
				</Auth>
			</View>
		);
	}
}

export default App;
