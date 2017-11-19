import React, { Component } from 'react';
import { View } from 'react-native';

import { Spinner } from '../../components/common';

import { PostForm } from '../forms';

class HouseForm extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			formStyle: this.props.formStyle,
			userId: this.props.user.uid,
			isLoading: false
		};
	}

	handleSubmitData(userId, address, headline, squareFeet, price){
		this.setState({
			isLoading: true
		});
		return fetch('https://android-endpoint.appspot.com/home', {
			method: 'POST',
			dataType: 'json',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userId: userId,
				address: address,
				headline: headline,
				squareFeet: squareFeet,
				price: price,
			})
		})
			.then((res) => {
				this.setState({
					isLoading: false
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	renderForm(){
		if(this.state.isLoading === true){
			return <Spinner />
		}else{
			return <PostForm userId={this.state.userId} submitData={this.handleSubmitData.bind(this)} />
		}
	}

	render(){
		return(
			<View style={this.state.formStyle}>
				{this.renderForm()}
			</View>
		);
	}
}

export { HouseForm };
