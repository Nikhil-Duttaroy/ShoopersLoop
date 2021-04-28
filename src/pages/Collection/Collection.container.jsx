// import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { compose } from "redux"; //makes wrapping multiple HOC'S easier

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/WithSpinner/WithSpinner.component";
import CollectionsPage from "./Collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage);

export default CollectionsPageContainer;
