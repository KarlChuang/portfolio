import { connect } from 'react-redux';

import Project from '../Components/Project';
import {
  CHANGE_TO_PAGE_ABOUT,
  CHANGE_TO_PAGE_PROJECT,
} from '../Actions/Topbar';

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
)(Project);
