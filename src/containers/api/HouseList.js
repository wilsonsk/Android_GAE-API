import React, { Component} from 'react';
import { ScrollView, View, Text } from 'react-native';

import HouseDetail from '../../components/HouseDetail';
import { Spinner } from '../../components/common';

class HouseList extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			listStyle: this.props.listStyle,
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
				this.props.gotDataSuccessCB();
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
		return(
			<ScrollView style={this.state.listStyle}>
				{this._renderHouses()}
			</ScrollView>
		);
	}
};

export { HouseList };
