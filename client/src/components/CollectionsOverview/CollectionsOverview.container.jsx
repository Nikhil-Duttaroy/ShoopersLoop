// import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {compose} from 'redux' //makes wrapping multiple HOC'S easier

import {
  selectIsCollectionFetching} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/WithSpinner/WithSpinner.component";
import CollectionsOverview from './CollectionsOverview.components';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,  
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner((CollectionsOverview)))

 const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner)
  (CollectionsOverview)


export default CollectionsOverviewContainer;
