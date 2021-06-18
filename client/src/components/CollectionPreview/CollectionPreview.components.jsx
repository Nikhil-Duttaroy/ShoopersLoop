import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "./../CollectionItem/CollectionItem.components";
import "./CollectionPreview.styles.scss";


const CollectionPreview = ({match, title, items, routeName }) => (
  <div className='collection-preview'>
    <Link to={`shop/${routeName}`}>
      <h1 className='title'> {title}</h1>
    </Link>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
