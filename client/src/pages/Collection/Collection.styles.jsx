import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

export const TabContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  /* font-size: 0.8rem; */
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  scrollbar-width: none;
`;


export const TabItem = styled.div`
    margin-right: 1rem;
    padding: 0.15rem 1rem;
    cursor: pointer;
    white-space: nowrap ;
    border: 1px solid;
    border-radius: 999px;
`;