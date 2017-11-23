import React, { Component} from 'react';
import { ScrollView, View, Text } from 'react-native';

import HouseDetail from '../../components/HouseDetail';
import { Spinner } from '../../components/common';

class HouseList extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			userId: this.props.user.uid,
			isLoading: true,
			listStyle: this.props.listStyle,
			houses: this.props.houses,
		};
	}

	componentWillMount(){
		this._getCB();
	}

	_getCB(){
		urlToFetch = 'https://android-endpoint.appspot.com/home?userId=' + this.state.userId;
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
					isLoading: false
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}


	_renderHouses(){
		if(this.state.isLoading === false){
			return <HouseDetail houses={this.state.houses} isLoading={this.state.isLoading} />
		}else{
			return(
				<Spinner size="small" />
			);
		}
	}

	render(){
		return(
			<ScrollView style={this.state.listStyle}>
				{this._renderHouses()}
			</ScrollView>
		);
	}
};

export { HouseList };

