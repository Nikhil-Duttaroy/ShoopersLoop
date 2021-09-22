import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 2.3rem;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const LinkContainer = styled.ul`
  font-size: 1.1rem;
  @media screen and (max-width: 800px) {
    width: 50%;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
`;
export const MapContainer = styled.div`
  background-color: red;
  width: 20%;
  height: 150px;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
