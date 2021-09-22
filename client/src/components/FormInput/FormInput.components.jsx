import React from 'react';

import "./FormInput.styles.jsx"

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./FormInput.styles";
import clear from "../../assets/clear.svg";

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
   
  </GroupContainer>
);

export default FormInput;
