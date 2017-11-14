import React, { Component } from 'react';
import { View, Text } from 'react-native';


// Import custom RN components/containers
import { Header, Footer } from './components/common';
import LoginStatus from './components/LoginStatus';
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

	renderAuth(){
		if (this.state.isLoggedIn === false){
			return <Auth logInSuccessCB={() => this.logInSuccessCB()} isLoggedIn={this.state.isLoggedIn} />
		}else{
			return null;
		}
	}

	renderHouseList(){
		if (this.state.isLoggedIn === false){
			return <HouseList isLoggedIn={this.state.isLoggedIn} />
		}else{
			return null;
		}
	}

	render(){

		

		return(
			<View style={styles.appContainer}>
				<Header headerText={"Houses"} />
				{this.renderAuth()}
				{this.renderHouseList()}
				<Footer>
					<LoginStatus loginStatus={this.state.isLoggedIn} />
				</Footer>
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
