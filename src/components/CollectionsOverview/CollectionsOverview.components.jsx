import { React } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from "./../CollectionPreview/CollectionPreview.components";
import { SelectCollectionForPreview } from "./../../redux/shop/shop.selector";


import './CollectionsOverview.styles.scss'


const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...othercollectionProps }) => (
      <CollectionPreview key={id} {...othercollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: SelectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview)