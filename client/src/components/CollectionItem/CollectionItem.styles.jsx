import styled from "styled-components";
import CustomButton from './../CustomButton/CustomButton.components';
import FormInput from './../FormInput/FormInput.components';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

export const FormInputContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* flex-wrap: wrap; */
  flex:flex-grow;
  padding: 0;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
  }
`;
export const FormInput1 = styled(FormInput)`
  padding: 0;
  margin: 0;
  @media screen and (max-width: 800px) {
    width: 70%;
    margin:0 auto;
  }
`;

AddButton.displayName = "AddButton";
BackgroundImage.displayName = "BackgroundImage";
CollectionFooterContainer.displayName = "CollectionFooterContainer";
NameContainer.displayName = "NameContainer";
PriceContainer.displayName = "PriceContainer";