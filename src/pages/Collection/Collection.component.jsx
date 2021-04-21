import React ,{useEffect} from 'react'
import './Collection.styles.scss'
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
    <div className='collection-page'>
      <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(item=>(
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);