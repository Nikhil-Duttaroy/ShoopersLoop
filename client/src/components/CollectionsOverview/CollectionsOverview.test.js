import React from "react";
import { shallow } from "enzyme";
import {CollectionsOverview} from './CollectionsOverview.components';
import { CollectionsOverviewContainer } from './CollectionsOverview.styles';



it("should render CollectionsOverview component", () => {
  expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot();
});

it("should render CollectionsOverviewContainer component", () => {
  expect(
    shallow(<CollectionsOverviewContainer/>)
  ).toMatchSnapshot();
});
