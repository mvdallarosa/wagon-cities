import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city'

class CityList extends Component {
  debugger
  componentWillMount() {
    this.props.setCities();
  }
  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <City city={city} />)}
      </div>
    );
  }
};

import { setCities } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(CityList);
