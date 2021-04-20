import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from 'reselect';


import './Directory.styles.scss';
import  MenuItem  from './../MenuItem/MenuItem.components';
import { selectDirectorySections } from "../../redux/directory/directory.selector";



const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
        
const mapStateToProps= createStructuredSelector({
  sections:selectDirectorySections
}) 


export default connect(mapStateToProps)(Directory)


