import { useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import alanBtn from "@alan-ai/alan-sdk-web";
import { addItem, toggleCartHidden } from "./../redux/cart/cart.actions";
import { selectCollections } from "../redux/shop/shop.selector";


const useAlan = (collection) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);
  const collections=useSelector(selectCollections)
  console.log(collections);
  // var newArrayDataOfOjbect = Object.values(collections);
  // console.log(newArrayDataOfOjbect);
  const arrayOfObj = collections && Object.entries(collections).map((e) => ({ [e[0]]: e[1] }));
  console.log(arrayOfObj)
  if(arrayOfObj)  {
   arrayOfObj.map(item => console.log(item))
}
  
  
  // console.log(collection);
  // const {items}=collection
  // console.log(items);

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
      onCommand: ({command,payload:{name}}) => {
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
        // if (command === "add-item") {
        //   // console.log(name);
        //   console.log(findItem(items,name))
        //   const result=findItem(items,name)
        //   console.log(result)
        //   dispatch(addItem(result));
        // }
      },
    });
  }
  }, []);

  return null;
};

export default useAlan




