import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "./../../redux/shop/shop.actions";
import Spinner from "./../../components/Spinner/Spinner.component";
import { Helmet } from "react-helmet-async";


// import  CollectionsOverviewContainer  from './../../components/CollectionsOverview/CollectionsOverview.container';
// import CollectionsPageContainer from './../Collection/Collection.container';
const  CollectionsOverviewContainer = lazy(() =>import('./../../components/CollectionsOverview/CollectionsOverview.container'));
const CollectionsPageContainer = lazy(()=> import('./../Collection/Collection.container'));



export const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <>
    <Helmet>
        <title>ShoopersLoop: Shop</title>
        <meta name='description' content='Shoppage for shoopersloop , choose from your favorite clothing categories' />
        <link rel='canonical' href='/shop' />
    </Helmet>
    <div className='shop-page'>
      <Suspense fallback={<Spinner/>}>
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
      </Suspense>
    </div>
    </>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections:selectCollections
// })



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
