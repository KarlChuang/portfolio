import { connect } from 'react-redux';

import Topbar from '../Components/Topbar';
import {
  CHANGE_TO_PAGE_ABOUT,
  CHANGE_TO_PAGE_PROJECT,
} from '../Actions/Topbar';

const mapStateToLinkProps = ({ page }) => ({
  page
});

export default connect(
  mapStateToLinkProps,
)(Topbar);
