import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import alanBtn from "@alan-ai/alan-sdk-web";
import { addItem, toggleCartHidden } from "./../redux/cart/cart.actions";
import {
  SelectCollectionForPreview,
  selectCollections,
} from "../redux/shop/shop.selector";

const useAlan = (collection) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // console.log(location.pathname);
  // const collections = useSelector(selectCollections);
  // console.log(collections);
  // var newArrayDataOfOjbect = Object.values(collections);
  // console.log(newArrayDataOfOjbect);
  //   const arrayOfObj = collections && Object.entries(collections).map((e) => ({ [e[0]]: e[1] }));
  //   console.log(arrayOfObj)
  //   if(arrayOfObj)  {
  //    arrayOfObj.map(item => console.log(item))
  // }

  // const itemCollection = useSelector(SelectCollectionForPreview);
  // console.log(itemCollection);

  // const itemsArray = itemCollection
  //   .map((item) => item.items)
  //   .map((itm) => console.log(itm));

  // .find((item) => {
  //   return item.name === "White Sneakers";
  // });

  // console.log(itemsArray);

  // const itemList=itemsArray.map(itm=>{
  //   itm.map(({name}) => console.log(name))
  // })
  // ----------------------------

  // const itemName = itemList.map(itm=>console.log(itm.name))

  // console.log(itemName);

  // const res = itemCollection.map(({ items }) => {
  //   items.map((item) => console.log(item));
  // });

  // const checkString =(item,name) => {
  //   return item.name.toLowerCase() === name.toLowerCase()
  // }

  // const findItem = (itemsC, name) => {return (
  //   itemsC.map(({ items }) => {
  //     const nameReturned = items.find((item, index) => {
  //       console.log(item.name.toLowerCase());
  //       console.log(name.toLowerCase());
  //       console.log(item.name.toLowerCase().includes("Black Converse"));
  //     });
  //     return nameReturned;
  //   })
  // )}

  /////////////////////////
  // const findItem = (itemCollection,name) => { return(
  //   itemCollection.map(({id,items}) => {
  //     // console.log(items);
  // items.filter((item,idx) => {
  //   const res=item.name.toLowerCase().includes(name.toLowerCase())
  //   console.log(res);
  // })
  // })
  // )};

  // console.log(findItem(itemCollection, "Black Converse"));
  // const findItem = (itemsC, name) => {
  //    itemsC.map(({ items }) => {
  //      console.log(items);
  //       items.find((item,index) => item.name.toLowerCase() === name.toLowerCase());
  //   });
  // };

  //  }).find((item,index) =>{
  //     return item.name.toLowerCase() === name.toLowerCase()
  //   })
  //   return nameReturned
  // }

  // const a =itemCollection.map(({items}) => {
  //   console.log(items)

  // })

  // const findItem = (itemCollection,name) => {
  //   itemCollection.map(({id,items}) => {
  //     console.log(items);
  // const res=items.filter((item,idx) => {
  //   return item.name.toLowerCase().includes(name.toLowerCase())
  // })
  // console.log(res)
  // })
  // };

  // console.log(findItem(itemCollection, "Black Converse"));

  // console.log(collection);
  // const {items}=collection
  // console.log(items);
  // const findItem=(items,name)=>{
  //   const nameReturned = items.find((item,index) =>{
  //     console.log(item);
  //     return item.name.toLowerCase() === "Black Converse"
  //   })
  //   return nameReturned
  // }
  
  // itemCollection.map(({items}) => { console.log(findItem(items))})


  // const findItem=(items,name)=>{
  //   const nameReturned = items.find((item,index) =>{
  //     return item.name.toLowerCase() === name.toLowerCase()
  //   })
  //   return nameReturned
  // }

  const alanBtnInstance = useRef(null);
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtn({
        key: "a87a1bd094bc9263ed0f700c624623d12e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command }) => {
          if (command === "open-cart") {
            dispatch(toggleCartHidden());
          }
          if (command === "close-cart") {
            dispatch(toggleCartHidden());
          }
          if (command === "show-sneakers") {
            history.push("/");
            history.push("shop/sneakers");
          }
          if (command === "show-hats") {
            history.push("/");
            history.push("shop/hats");
          }
          if (command === "show-mens") {
            history.push("/");
            history.push("shop/mens");
          }
          if (command === "show-womens") {
            history.push("/");
            history.push("shop/womens");
          }
          if (command === "show-jackets") {
            history.push("/");
            history.push("shop/jackets");
          }
          if (command === "open-contact") {
            history.push("/");
            history.push("contact");
          }
          if (command === "open-home") {
            history.push("/");
    
          }
          // if (command === "add-item") {
          //   // console.log(name);
          //   console.log(findItem(items, name));
          //   const result = findItem(items, name);
          //   console.log(result);
          //   dispatch(addItem(result));
          // }
        },
      });
    }
  }, []);

  return null;
};

export default useAlan;
