import styled ,{css} from "styled-components";


const FormStyles = css`
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137);
  margin-bottom: 20px;
  border-top: 2px solid rgb(0, 0, 0);
  border-left: 2px solid rgb(0, 0, 0);
  background: rgb(238, 231, 231);
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
  &: focus {
    border: 1.5px solid rgb(0, 0, 196);
  }
  `

export const FormInputLabel = styled.label`
  padding-bottom: 10px;
  color: black;
  font-weight: bold;
  font-size:1.5rem
`;

export const FormInputField = styled.input`
${FormStyles}`
;
export const FormTextArea = styled.textarea`
  ${FormStyles}
  height: 15%;
  max-width: 50%;
  min-height: 100px;
`;

export const SubmitButton = styled.button`
  width: fit-content;
  margin: 0 auto;
  padding: 10px 40px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 10px;
  &:hover {
    background-color: rgb(0, 0, 196);
  }
`;