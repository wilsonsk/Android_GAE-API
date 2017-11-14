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

	loginSuccessCB(){
		this.setState({
			isLoggedIn: true 
		})
	}

	renderHeader(){ 
		switch(this.state.isLoggedIn){
			case false: 
				var header = 'Houses Login';
				return(
					<Header headerText={header}/>
				);
			case true:
				var header = 'Houses List';
				return(
					<Header headerText={header}/>
				);
		}
	}

	renderAuth(){
		if (this.state.isLoggedIn === false){
			return <Auth loginSuccessCB={() => this.loginSuccessCB()} isLoggedIn={this.state.isLoggedIn} />
		}else{
			return null;
		}
	}

	renderHouseList(){
		// is set to false for debugging purposes (to bypass login); set to true in production env.
		if (this.state.isLoggedIn === true){
			return <HouseList isLoggedIn={this.state.isLoggedIn} />
		}else{
			return null;
		}
	}

	render(){

		

		return(
			<View style={styles.appContainer}>
				{this.renderHeader()}
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
