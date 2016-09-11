import React, { Component, PropTypes } from 'react'

import styles from './styles.css'

// import { getBookings } from '../../actions/bookingActions'

export default class Bookings extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBookings()
    // const { dispatch } = this.props
    // dispatch(getBookings())
  }

  componentWillReceiveProps(nextProps) {
  	console.log('nextProps', nextProps)
  	console.log('current props', this.props)
  }

  render() {
  	const { bookings, bookings_cnt, testBookings } = this.props
  	console.log('Bookings component', this.props)
    return (
      <div>
        <div>Bookings going to load 2...</div>
        <button onClick={testBookings}>
          testBookings
        </button>
      </div>
    );
  }
}

Bookings.propTypes = {
  getBookings: PropTypes.func,
  bookings: PropTypes.array,
  testBookings: PropTypes.func
};

