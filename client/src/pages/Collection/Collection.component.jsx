import React ,{useEffect} from 'react'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./Collection.styles.jsx";
import { connect } from 'react-redux';
import { selectCollection } from './../../redux/shop/shop.selector';
import CollectionItem from './../../components/CollectionItem/CollectionItem.components';



const CollectionPage = ({ collection }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  
  const { title, items } = collection;
  // console.log(collection);

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);