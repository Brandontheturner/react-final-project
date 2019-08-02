import { connect } from "react-redux";
import Number from "../Components/Number";
import { setNum } from "../Redux/actions";

function mapStateToProps(state) {
  return {
    num: state.num
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setNum: num => dispatch(setNum(num))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Number);
