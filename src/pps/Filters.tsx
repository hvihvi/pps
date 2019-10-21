import { useComponents } from "./Pps";
import { FiltersProps, Predicate } from "./types";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const Filters = (props: FiltersProps) => {
  const components = useComponents();
  return components.Filters(props);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addFilter: (p: Predicate) => dispatch({ type: "ADD_FILTER", filter: p }),
  rmFilter: (p: Predicate) => dispatch({ type: "RM_FILTER", filter: p })
});

export default connect(
  undefined,
  mapDispatchToProps
)(Filters);
