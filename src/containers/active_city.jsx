import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`
    return (
      <div className="active-city">
        <h3>{this.props.selectedCity.name}</h3>
        <p>{this.props.selectedCity.address}</p>
        <img src={this.props.selectedCity.slug === undefined ? null : src } alt=""/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity)
