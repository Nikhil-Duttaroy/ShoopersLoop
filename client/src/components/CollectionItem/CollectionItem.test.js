import React from "react";
import { shallow } from "enzyme";
import {CollectionItem} from './CollectionItem.components';

describe('CollectionItem Component', () => {
    let wrapper;
    let mockAddItem;
    const mockImageUrl = "www.test.com"
    const mockName="Black Shirt"
    const mockPrice=50

    beforeEach(()=>{
        mockAddItem=jest.fn();

        const mockProps={
            item:{
                imageUrl:mockImageUrl,
                name:mockName,
                price:mockPrice,
            },
            addItem:mockAddItem
        };
        wrapper = shallow(<CollectionItem {...mockProps} />);
    });


    it('should render CollectionItem', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it("should call addItem when Add Item Button is Clicked", () => {
        wrapper.find("AddButton").simulate("click");
        expect(mockAddItem).toHaveBeenCalled();
    });

    it("should render BackgroundImage with prop of ImageUrl", () => {
      expect(wrapper.find("BackgroundImage").prop("imageUrl")).toBe(mockImageUrl);
    });

    it("should render NameContainer with prop of name", () => {
      expect(wrapper.find("NameContainer").text()).toBe(mockName);
    });

    it("should render PriceContainer with prop of price", () => {
      const price = parseInt(wrapper.find("PriceContainer").text());
      expect(price).toBe(mockPrice);
    });






});
