import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "./../../redux/shop/shop.actions";

import  CollectionsOverviewContainer  from './../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionsPageContainer from './../Collection/Collection.container';


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

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
  }
}

// const mapStateToProps = createStructuredSelector({
//   collections:selectCollections
// })



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
