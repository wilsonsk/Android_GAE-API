import React, { Component} from 'react';
import { ScrollView } from 'react-native';

import HouseDetail from '../components/HouseDetail';

class HouseList extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			houses: []
		};
	}
	componentWillMount(){
		return fetch('https://rest-api-implementation-183317.appspot.com/boats')
			.then((response) => response.Boats.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					houses: responseJson
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	renderHouses(){
		return this.state.houses.map((house) => {
			alert(house);
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

export default HouseList;
