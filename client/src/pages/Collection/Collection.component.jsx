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
import { FormInput1, FormInputContainer1 } from '../../components/CollectionItem/CollectionItem.styles.jsx';



const CollectionPage = ({ collection }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  const [searchTerm,setSearchTerm] = useState("")
  const [rangeTerm1, setRangeTerm1] = useState(0);
  const [rangeTerm2, setRangeTerm2] = useState(2500);
  const [colourTerm, setColourTerm] = useState("");
  
  const [filterProducts, setFilterProducts] = useState([]);
          
if (rangeTerm2 == "") setRangeTerm2(2500);
          


  const { title, items } = collection;
useEffect(() => {
  setFilterProducts(
    items
      .filter((product) => {
        return (
          product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        );
      })
      .filter((product) => {
        return Number(product.price) >= Number(rangeTerm1);
      })
      .filter((product) => {
        return Number(product.price) <= Number(rangeTerm2);
      })
      .filter((product) => {
        return product.colour
          .toLowerCase()
          .includes(colourTerm.toLocaleLowerCase());
      })
  );
}, [searchTerm, rangeTerm1, rangeTerm2, colourTerm, items]);

  return (
    <>
      {/* <div style={{backgroundColor: "red" , height:"100%" , width:"100%"}}></div> */}
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>

        <FormInput
          style={{ margin: "0" }}
          type='text'
          placeholder='Search Name '
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <FormInputContainer1>
          <FormInput1
            type='text'
            placeholder='Min'
            onChange={(e) => {
              setRangeTerm1(e.target.value);
            }}
          />
          <FormInput1
            type='text'
            placeholder='Max'
            onChange={(e) => {
              setRangeTerm2(e.target.value);
            }}
          />
          {/* colour */}
          <FormInput1
            type='text'
            placeholder='Colour'
            onChange={(e) => {
              setColourTerm(e.target.value);
            }}
            list='colour'
          />

          <datalist id='colour'>
            {items.map((item, key) => (
              <option key={key} value={item.colour} />
            ))}
          </datalist>
        </FormInputContainer1>

        <CollectionItemsContainer>
          {/* {items */}
          {filterProducts.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
          {/* {items
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .filter((val1) => {
              if (
                val1.category.toLowerCase().includes(searchTerm1.toLocaleLowerCase())
              ) {
                // console.log(val1);
                return val1;
              }
            })
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))} */}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);