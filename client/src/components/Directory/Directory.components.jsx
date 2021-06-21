import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from 'reselect';


import './Directory.styles.jsx';
import  MenuItem  from './../MenuItem/MenuItem.components';
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { DirectoryMenuContainer } from "./Directory.styles";


const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);
        
const mapStateToProps= createStructuredSelector({
  sections:selectDirectorySections
}) 


export default connect(mapStateToProps)(Directory)


