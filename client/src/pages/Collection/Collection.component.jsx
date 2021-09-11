import React ,{useEffect,useState} from 'react'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./Collection.styles.jsx";
import { connect } from 'react-redux';
import { selectCollection } from './../../redux/shop/shop.selector';
import CollectionItem from './../../components/CollectionItem/CollectionItem.components';
import FormInput from '../../components/FormInput/FormInput.components.jsx';



const CollectionPage = ({ collection }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  const [searchTerm,setSearchTerm] = useState("")
  
  const { title, items } = collection;
  // console.log(collection);

  return (
    <>
    {/* <div style={{backgroundColor: "red" , height:"100%" , width:"100%"}}></div> */}
      <CollectionPageContainer>
        <FormInput
        style={{margin:"0"}}
          type='text'
          placeholder='SEARCH... '
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);