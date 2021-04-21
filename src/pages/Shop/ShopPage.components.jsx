import React from 'react';
import { Route } from "react-router-dom";

import CollectionPage from "./../Collection/Collection.component";

import CollectionsOverview from './../../components/CollectionsOverview/CollectionsOverview.components';
// import { createStructuredSelector } from 'reselect';
// import { selectCollections } from './../../redux/shop/shop.selector';
// import { connect } from 'react-redux';



const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

// const mapStateToProps = createStructuredSelector({
//   collections:selectCollections
// })


export default (ShopPage);
