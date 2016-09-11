import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import Bookings from 'containers/Bookings';

import styles from './styles.css';

export class Dashboard extends React.Component {
  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/'
   */
  openHomePage = () => {
    this.openRoute('/');
  };

  render() {
    console.log('Dashboard', this.props)
    const test_var = this.props.test ? this.props.test.test_var : ''
    return (
      <div>
        <Helmet
          title="Dashboard"
          meta={[
            { name: 'description', content: 'Dashboard' },
          ]}/>
        <H1>
          Dashboard
        </H1>
        <Bookings/>
        <div>test_var: {test_var}</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>
              one
            </p>
            <p>
              two
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
Dashboard.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    bookings: state.bookings,
    test: 'test'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
