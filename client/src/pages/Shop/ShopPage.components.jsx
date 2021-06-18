import React,{useEffect} from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "./../../redux/shop/shop.actions";

import  CollectionsOverviewContainer  from './../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionsPageContainer from './../Collection/Collection.container';


const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections:selectCollections
// })



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
