import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import NativeTachyons from "react-native-style-tachyons";

// Import custom RN components/containers
import { Header, Footer } from './components/common';
import User from './components/User';
import { Auth, HouseList, HouseForm } from './containers/api';

NativeTachyons.build({

}, StyleSheet);

//need to initialize isloggedIn === null to enable 3 state conditional logic for initial render (ie use spinned when null)

class App extends Component<{}> {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			isLoggedIn: false,
			user: {},
			gotData: false,
			listStyle: styles.noDataListStyle,
			formStyle: styles.noDataFormStyle,
			houses: [],
		}
		
	}


	loginSuccessCB(user){
		this.setState({
			isLoggedIn: true,
			user: user,
		})
	}

	onPostCB(){
		this.setState({
			isLoading: true,
		})
		urlToFetch = 'https://android-endpoint.appspot.com/home?userId=' + this.state.user.uid;
		return fetch( urlToFetch, {
			method: 'GET',
			dataType: 'json',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((responseJson) => {
				res = JSON.parse(responseJson);
				homes = res.Homes;
				this.setState({
					houses: homes,
				});
			})
			.catch((error) => {
				console.error(error);
			});
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
			return <Auth loginSuccessCB={this.loginSuccessCB.bind(this)} isLoggedIn={this.state.isLoggedIn} />
		}else{
			return null;
		}
	}

	renderUser(){
		if(this.state.user.email){
			return(
				<User user={this.state.user} />
			);
		}else{
			return null;
		}
	}

	renderHouseList(){
		// is set to false for debugging purposes (to bypass login); set to true in production env.
		if (this.state.isLoggedIn === true){
			if(this.state.gotData === true){
				return <HouseList listStyle={styles.noDataListStyle} houses={this.state.houses} isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
			}else{
				return <HouseList listStyle={styles.gotDataListStyle} houses={this.state.houses} isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
			}
		}else{
			return null;
		}
	}

	renderHouseForm(){
		if(this.state.isLoggedIn === true){
			if(this.state.gotData === true){
				return <HouseForm formStyle={styles.noDataFormStyle} isLoggedIn={this.state.isLoggedIn} user={this.state.user} onPress={this.onPostCB.bind(this)} />
			}else{
				return <HouseForm formStyle={styles.gotDataFormStyle} isLoggedIn={this.state.isLoggedIn} user={this.state.user} onPress={this.onPostCB.bind(this)} />
			}
		}else{
			return null;
		}
	}

	render(){

		

		return(
			<View style={NativeTachyons.styles.flx_i}>
				{this.renderHeader()}
				{this.renderAuth()}
				{this.renderHouseList()}
				{this.renderHouseForm()}
				<Footer>
					{this.renderUser()}
				</Footer>
			</View>
		);
	}
}


const styles = {
	appContainer: { 
		flex: 1,
		flexDirection: 'column',
	},
	noDataListStyle: {
		flex: 1,
		paddingBottom: 10,
		borderWidth: 5,
		borderColor: 'black',
		borderBottomWidth: 0,
	},
	noDataFormStyle: {
		flex: 1.618,
		paddingBottom: 10,
		borderWidth: 5,
		borderColor: 'black',
		borderBottomWidth: 0,
	},
	gotDataListStyle: {
		flex: 1.618,
		paddingBottom: 10,
		borderWidth: 5,
		borderColor: 'black',
		borderBottomWidth: 0,
	},
	gotDataFormStyle: {
		flex: 1,
		paddingBottom: 10,
		borderWidth: 5,
		borderColor: 'black',
		borderBottomWidth: 0,
	}
}

export default App;
