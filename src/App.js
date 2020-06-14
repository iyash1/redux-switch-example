import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Main from "./components/Main";
import * as actions from "./actions/action";

const mapStateToProps = (state) => ({
  switch: state.switch,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
