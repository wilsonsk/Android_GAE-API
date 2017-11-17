import React, { Component } from 'react';
import { View } from 'react-native';

import { PostForm } from '../forms';

class HouseForm extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			formStyle: this.props.formStyle
		};
	}

	render(){
		return(
			<View style={this.state.formStyle}>
				<PostForm />
			</View>
		);
	}
}

export { HouseForm };
