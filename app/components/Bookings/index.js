import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

export default class Bookings extends Component {
  componentDidMount() {
    this.props.getBookings();
  }

  render() {
    return (
      <div>Bookings going to load 2...</div>
    );
  }
}

Bookings.propTypes = {
  getBookings: PropTypes.func
};

