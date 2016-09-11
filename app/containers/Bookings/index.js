import React from 'react';
import { connect } from 'react-redux';

import Bookings from 'components/Bookings';
import { getBookings, testBookings } from 'actions/bookingActions';

function mapStateToProps(state) {
  return {
    bookings: state.bookings,
    test: 'test'
  };
}

const mapDispatchToProps = {
  getBookings,
  testBookings
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
