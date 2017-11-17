import React, { Component } from 'react';
import { View } from 'react-native';

import { PostForm } from '../forms';

class HouseForm extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {

		};
	}

	render(){
		return(
			<View>
				<PostForm />
			</View>
		);
	}
}

export { HouseForm };
