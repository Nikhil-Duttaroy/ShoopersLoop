import React from 'react';
import './CollectionItem.styles.jsx'

import { connect } from "react-redux";

import { addItem } from '../../redux/cart/cart.actions';
// import useAlan from "../../hooks/useAlan.jsx";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './CollectionItem.styles';

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import useAlan from '../../hooks/useAlan.jsx';

const CollectionItem = ({ item, addItem }) => {
  // useAlan();

  const { name, price, imageUrl, description ,tags,category} = item;
// useAlan(item)
  const notify = () => toast.success(`${name} added to cart`);
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
        {/* <PriceContainer>{tags}</PriceContainer> */}
      </CollectionFooterContainer>
      <AddButton
        onClick={() => {
          addItem(item);
          notify();
        }}
        inverted
      >
        Add to cart
      </AddButton>
      <ToastContainer
        position='top-right'
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);