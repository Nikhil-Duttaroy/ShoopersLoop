import { React } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from "./../CollectionPreview/CollectionPreview.components";
import { SelectCollectionForPreview } from "./../../redux/shop/shop.selector";


import { CollectionsOverviewContainer } from "./CollectionsOverview.styles";

export const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);
const mapStateToProps = createStructuredSelector({
  collections: SelectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview)