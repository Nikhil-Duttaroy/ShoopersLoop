import React ,{useEffect,useState} from 'react'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
  TabContainer,
  TabItem,
} from "./Collection.styles.jsx";
import { connect } from 'react-redux';
import { selectCollection } from './../../redux/shop/shop.selector';
import CollectionItem from './../../components/CollectionItem/CollectionItem.components';
import FormInput from '../../components/FormInput/FormInput.components.jsx';
import { FormInput1, FormInputContainer1 } from '../../components/CollectionItem/CollectionItem.styles.jsx';
// import Tabs from '../../components/Tabs/Tabs.component.jsx';
// import clear from "../../assets/clear.svg";
import CustomButton from './../../components/CustomButton/CustomButton.components';
import useAlan from './../../hooks/useAlan';



const CollectionPage = ({ collection }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [rangeTerm1, setRangeTerm1] = useState(0);
  const [rangeTerm2, setRangeTerm2] = useState(2500);
  const [colourTerm, setColourTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");

  const [filterProducts, setFilterProducts] = useState([]);

  if (rangeTerm2 === "") setRangeTerm2(2500);

  const { title, items } = collection;
  // console.log(collection);
  // console.log(items);

  const uniqueCategory = [...new Set(items.map((itm) => itm["category"]))];
  const uniqueColour = [...new Set(items.map((itm) => itm["colour"]))];

  useEffect(() => {
    setFilterProducts(
      items
        .filter((product) => {
          return (
            product.name
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) ||
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
        .filter((product) => {
          return product.category
            .toLowerCase()
            .includes(categoryTerm.toLocaleLowerCase());
        })
    );
  }, [searchTerm, rangeTerm1, rangeTerm2, colourTerm, categoryTerm, items]);

  // useAlan(collection);
  return (
    <>
      {/* <div style={{backgroundColor: "red" , height:"100%" , width:"100%"}}></div> */}
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>

        <FormInput
          style={{ margin: "0" }}
          type='text'
          value={searchTerm}
          placeholder='Search Name '
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <FormInputContainer1>
          <FormInput1
            type='text'
            // value={rangeTerm1}
            placeholder='Min'
            onChange={(e) => {
              setRangeTerm1(e.target.value);
            }}
          />
          <FormInput1
            type='text'
            // value={rangeTerm2}
            placeholder='Max'
            onChange={(e) => {
              setRangeTerm2(e.target.value);
            }}
          />
          {/* colour */}
          <FormInput1
            type='text'
            placeholder='Colour'
            value={colourTerm}
            onChange={(e) => {
              setColourTerm(e.target.value);
            }}
            list='colour'
          />

          <datalist id='colour'>
            {uniqueColour.map((item, key) => (
              <option key={key} value={item} />
            ))}
          </datalist>
        </FormInputContainer1>
        <CustomButton
          onClick={() => {
            setSearchTerm("");
            setRangeTerm1("");
            setRangeTerm2("");
            setColourTerm("");
          }}
        >
          Clear Search Filters
        </CustomButton>
        <TabContainer>
          <TabItem
            onClick={(e) => {
              setCategoryTerm("");
            }}
          >
            ALL
          </TabItem>
          {uniqueCategory.map((item) => (
            <TabItem
              onClick={(e) => {
                setCategoryTerm(item);
              }}
            >
              {item}
            </TabItem>
          ))}
        </TabContainer>

        <CollectionItemsContainer>
          {filterProducts.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    </>
  );
};;

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);