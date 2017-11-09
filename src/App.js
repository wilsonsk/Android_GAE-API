import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component<{}> {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		return fetch('https://rest-api-implementation-183317.appspot.com/boats')
			.then((response) => response.json())
			.then((responseJson) => {
				alert(JSON.stringify(responseJson.Boats));
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render(){
		return(
			<View>
				<Text>
					HELLO WORLD!
				</Text>
			</View>
		);
	}
}

export default App;
