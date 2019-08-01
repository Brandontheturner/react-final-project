import { connect } from "react-redux";
import Search from "../Components/Search";
import { setText } from "../Redux/actions";

function mapStateToProps(state) {
  return {
    text: state.text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setText: text => dispatch(setText(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
