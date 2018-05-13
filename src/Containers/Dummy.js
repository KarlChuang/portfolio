import React from 'react';
import { connect } from 'react-redux';

import {
  CHANGE_TO_PAGE_ABOUT,
  CHANGE_TO_PAGE_PROJECT,
} from '../Actions/Topbar';

class Dummy extends React.Component {
  constructor(props) {
    super(props);
    props.aboutRequest();
  }
  render() {
    return <div />;
  }
}

const mapStateToLinkProps = ({ page }) => ({
  page
});

const mapDispatchToLinkProps = dispatch => ({
  aboutRequest: () => dispatch(CHANGE_TO_PAGE_ABOUT()),
  projectRequest: () => dispatch(CHANGE_TO_PAGE_PROJECT()),
});

export default connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps,
)(Dummy);
