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

	handleSubmitData(key, userId, address, headline, squareFeet, price){
		if(!key){
			var getUrl = 'https://android-endpoint.appspot.com/home';
			if(!userId){
				alert("UserId error");
				return null;
			}
			if(!address){
				alert("Address error");
				return null;
			}
			if(!headline){
			alert("Headline error");
				return null;
			}
			if(!squareFeet){
				alert("Square Feet error " + typeof squareFeet);
				return null;
			}
			if(!price){
				alert("Price error " + typeof price);
				return null;
			}
		}else{
			var getUrl = 'https://android-endpoint.appspot.com/home?entityKey=' + key;
		}
		this.setState({
			isLoading: true
		});

		return fetch(getUrl, {
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
			.then((res) => res.json())
			.then((responseJson) => {
				alert(JSON.stringify(responseJson));
				this.setState({
					isLoading: false
				});
				this.props.onPress();
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
