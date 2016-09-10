import React from 'react';
import { connect } from 'react-redux';

import Bookings from 'components/Bookings';
import { getBookings } from 'actions/bookingActions';

function mapStateToProps(state) {
  return {
    test: 'test'
  };
}

const mapDispatchToProps = {
  getBookings
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
