import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  current: state.router.type
})

export default connect(mapStateToProps)(Component);


