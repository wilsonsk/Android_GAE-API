import React, { Component} from 'react';
import { ScrollView, View, Text } from 'react-native';

import HouseDetail from '../../components/HouseDetail';
import { Spinner } from '../../components/common';

class HouseList extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			houses: []
		};
	}
	componentWillMount(){
		this._getCB();
	}

	_getCB(){
		return fetch('https://rest-api-implementation-183317.appspot.com/boats', {
			method: 'GET',
			dataType: 'json',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					houses: responseJson.Boats
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	_postCB(){

	}

	_deleteCB(){

	}

	_renderHouses(){
		if(this.state.isLoading === false){
			return this.state.houses.map((house) => {
				return <HouseDetail key={house.id} house={house} isLoading={this.state.isLoading} />
			});
		}else{
			return(
				<Spinner size="small" />
			);
		}
	}

	render(){
		const { containerStyle } = styles;
		return(
			<ScrollView style={containerStyle}>
				{this._renderHouses()}
			</ScrollView>
		);
	}
};

const styles = {
	containerStyle: {
		flex: 1,
	}
};

export { HouseList };
