import { connect } from 'react-redux';
import { uiSwitch } from '../actions';
import Home from '../components/Home';

function mapDispatchToProps(dispatch) {
  return {
    uiSwitch: (ui) => {
      dispatch(uiSwitch(ui));
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);
