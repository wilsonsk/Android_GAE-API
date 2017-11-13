import React, { Component } from 'react';
import { View, Text } from 'react-native';

import SessionStatus from '../../components/SessionStatus';

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

	render(){
		if(1){
			return(
				<View style={styles.container} >
					<SessionStatus loggedInStatus={String(this.state.isLoggedIn)} />
					{this.props.children}
				</View>
			);
		}else{
			return(
				<SessionStatus loggedInStatus={String(this.state.isLoggedIn)} />
			);
		}
	}
}

const styles = {
	container: {
		flex: 1
	}
};

export { Auth };
