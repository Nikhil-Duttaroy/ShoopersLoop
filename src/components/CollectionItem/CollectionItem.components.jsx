import React from 'react';
import './CollectionItem.styles.scss'

import { connect } from "react-redux";

import CustomButton from './../CustomButton/CustomButton.components';
import { addItem } from '../../redux/cart/cart.actions';


const CollectionItem=({item,addItem}) =>{
    const { name, price, imageUrl }=item;
    return(
    <div className="collection-item">
        <div className="image" loading="lazy"
        style={{backgroundImage: `url(${imageUrl})`}}
        />
    <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
    </div>
    <CustomButton onClick={()=>addItem(item)} inverted>Add To Cart</CustomButton>
    </div>
)}

const mapDispatchToProps = (dispatch)=>({
    addItem:item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);