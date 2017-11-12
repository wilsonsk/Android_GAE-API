import React, { Component} from 'react';
import { ScrollView } from 'react-native';

import HouseDetail from '../../components/HouseDetail';

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
		return fetch('https://rest-api-implementation-183317.appspot.com/boats')
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

	renderHouses(){
		return this.state.houses.map((house) => {
			<HouseDetail key={house.name} house={house} isLoading={this.state.isLoading} />
		});
	}

	render(){
		return(
			<ScrollView>
				{this.renderHouses()}
			</ScrollView>
		);
	}
};

export { HouseList };
