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
			<View style={styles.appContainer}>
				<Header headerText={"Houses"} />
				<Auth logInSuccessCB={() => this.logInSuccessCB()} isLoggedIn={this.state.isLoggedIn} >
					<HouseList isLoggedIn={this.state.isLoggedIn} />
				</Auth>
			</View>
		);
	}
}

const styles = {
	appContainer: { 
		flex: 1,
	}
}

export default App;
