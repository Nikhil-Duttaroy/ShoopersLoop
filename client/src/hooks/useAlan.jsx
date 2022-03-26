import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import alanBtn from "@alan-ai/alan-sdk-web";
import {
  addItem,
  removeItem,
  toggleCartHidden,
} from "./../redux/cart/cart.actions";
import { fetchCollectionsStart } from "./../redux/shop/shop.actions";

import {
  SelectCollectionForPreview,
  selectCollections,
  selectCollection,
} from "../redux/shop/shop.selector";
import { clearFilters, colorTermFilter } from "../redux/filters/filter.actions";
import {
  categoryTermFilter,
  searchTermFilter,
  rangeTermFilter1,
  rangeTermFilter2,
} from "./../redux/filters/filter.actions";

const useAlan = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // console.log(itemCollection);
  // useEffect(() => {
  //   dispatch(fetchCollectionsStart());
  // }, [dispatch]);
  //
  const itemCollection = [
    {
      routeName: "jackets",
      id: "5UxMDMRUEF91D9kZ6yDG",
      title: "Jackets",
      items: [
        {
          category: "jacket",
          imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
          name: "Black Jean Shearling",
          id: "1",
          tags: "Men",
          colour: "Black",
          price: "125",
          description: "Solid denim jacket, fullsleeves, spread fur collar ",
        },
        {
          imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
          id: "2",
          price: "90",
          name: "Blue Jean Jacket",
          description:
            "Solid dark shade denim jacket, fullsleeves, regular collar ",
          category: "jacket",
          tags: "Men",
          colour: "Blue",
        },
        {
          imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
          price: "90",
          description: "Light wash jacket, fullsleeves, regular collar",
          colour: "Light Blue",
          id: "3",
          name: "Grey Jean Jacket",
          tags: "Women",
          category: "jacket",
        },
        {
          tags: "Men",
          id: "4",
          colour: "Brown ",
          category: "jacket",
          description: "Velvet jacket, fullsleeves, wide spread fur collar",
          imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
          price: "165",
          name: "Brown Shearling",
        },
        {
          colour: "Tan ",
          category: "jacket",
          imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
          name: "Tan Trench",
          id: "5",
          price: "185",
          tags: "Women",
          description: "Knee lenght trench, fullsleeves, stand collar",
        },
      ],
    },
    {
      routeName: "sneakers",
      id: "EGedWIkxZ5efgbg99Nnu",
      title: "Sneakers",
      items: [
        {
          category: "Shoes",
          imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
          name: "White Sneakers",
          id: "6",
          colour: "White",
          price: "200",
          tags: "men/Casual",
          description: "Nike white sole shoes",
        },
        {
          name: "Black Converse",
          category: "Shoes",
          price: "120",
          id: "7",
          description: "Black sole canvas shoes",
          colour: "Black",
          tags: "men/Casual",
          imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        },
        {
          id: "8",
          imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
          colour: "Red / White",
          description: "Nike Air red and with shoes",
          price: "160",
          category: "Shoes",
          tags: "men/Casual",
          name: "Red High Tops",
        },
        {
          tags: "men/Casual",
          price: "160",
          imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
          category: "Shoes",
          colour: "Brown / White",
          description: "Nike Air brown and white shoes",
          name: "Brown High Tops",
          id: "9",
        },
        {
          price: "130",
          description: "White high neck canvas shoes",
          tags: "Casual",
          name: "White Converse ",
          id: "10",
          category: "Shoes",
          imageUrl: "https://i.ibb.co/0JD05s7/White-Converse.jpg",
          colour: "White ",
        },
        {
          description: "White vans shoes with white sole",
          imageUrl: "https://i.ibb.co/7NJJtCx/vans-shoes.jpg",
          colour: "White",
          category: "Shoes",
          name: "Vans Shoes",
          id: "11",
          price: "180",
          tags: "Casual",
        },
        {
          tags: "Casual",
          colour: "Black / White",
          name: "Adidas Bravada ",
          category: "Shoes",
          description: "Adidas white sole shoes",
          id: "12",
          price: "180",
          imageUrl: "https://i.ibb.co/PxWQ3nh/adidas-bravada-shoes.jpg",
        },
        {
          imageUrl: "https://i.ibb.co/k4Yv66w/Ankle-boot-shoes.jpg",
          tags: "Formal",
          colour: "Brown",
          price: "160",
          description: "High Nech brown formal shoes",
          name: "Ankle Boot Shoes",
          id: "13",
          category: "Shoes",
        },
        {
          imageUrl: "https://i.ibb.co/s5LMK7d/Waterproof-sneakers.jpg",
          category: "Shoes",
          tags: "men/Casual",
          price: "160",
          name: "Yellow sneakers",
          id: "14",
          description: "Yellow designer shoes with yellow sole",
          colour: "Yellow",
        },
        {
          id: "15",
          tags: "Formal",
          name: "Black Formals",
          description: "Black formal shoes",
          imageUrl: "https://i.ibb.co/tz8kWKn/Black-Formals.jpg",
          category: "Shoes",
          colour: "Black",
          price: "180",
        },
        {
          id: "16",
          price: "150",
          imageUrl: "https://i.ibb.co/pJyBtZH/Nike-floaters.jpg",
          tags: "Casual",
          name: "Nike Floaters",
          colour: "Black",
          category: "Sandals",
          description: "Nike all weather floaters",
        },
        {
          category: "Sandals",
          name: "Summer Sandals",
          price: "150",
          tags: "Casual",
          description: "Stylish brown sandals",
          colour: "Brown",
          id: "17",
          imageUrl: "https://i.ibb.co/DtP6WHL/Summer-sandals.jpg",
        },
        {
          price: "160",
          id: "18",
          tags: "Casual",
          category: "Sandals",
          colour: "Olive",
          description: "Strong grip sandals",
          imageUrl: "https://i.ibb.co/fpMb6HF/Olive-vector-sandal.jpg",
          name: "Olive sport sandal",
        },
        {
          colour: "Black / White",
          id: "19",
          tags: "Casual",
          name: "Nike Canyon sandals",
          imageUrl: "https://i.ibb.co/vXvZLSZ/Nike-Canyon-Sandel.jpg",
          category: "Sandals",
          price: "180",
          description: "Hiking sandals with rubber grip sole",
        },
        {
          category: "Sandals",
          imageUrl: "https://i.ibb.co/FYzg3rJ/summer-wear.jpg",
          price: "150",
          name: "Summer wear",
          colour: "Black / White",
          tags: "Casual",
          id: "20",
          description: "Black rubber slides ",
        },
        {
          tags: "Casual",
          imageUrl: "https://i.ibb.co/6ZQ01VF/beach-flipflop.jpg",
          category: "Flip-Flop",
          name: "Beach Flipflop",
          id: "21",
          colour: "Black",
          price: "140",
          description: "Synthetic Black flip-flop",
        },
        {
          imageUrl: "https://i.ibb.co/b6zKMmL/Yellow-flipflop.jpg",
          price: "140",
          tags: "women/Casual",
          id: "22",
          description: "Yellow flip-flop with cushioned footbed",
          category: "Flip-Flop",
          colour: "Yellow",
          name: "Yellow Flipflop",
        },
        {
          description: "Multi color slipper with soft rubber footbed",
          price: "140",
          tags: "Casual",
          id: "23",
          name: "Rainbow FlipFlop",
          colour: "Rainbow",
          imageUrl: "https://i.ibb.co/3NrwH2x/Rainbow-Flipflop.jpg",
          category: "Flip-Flop",
        },
        {
          tags: "Casual",
          id: "24",
          imageUrl: "https://i.ibb.co/PN9gnfx/Nike-Flipflop.jpg",
          colour: "Pink",
          price: "130",
          name: "Nike Flipflop",
          category: "Flip-Flop",
          description: "Pink slippers with pattern footbed",
        },
        {
          id: "25",
          description: "Black party wear women sandals",
          colour: "Black",
          tags: "women/Casual",
          imageUrl: "https://i.ibb.co/crVH5Zh/Women-Flats.jpg",
          category: "Flats ",
          name: " Flats ",
          price: "160",
        },
        {
          colour: "Nude/Black ",
          id: "26",
          name: "Ballerina",
          category: "Flats ",
          price: "130",
          description: "Pink and black formal women's footwear",
          imageUrl: "https://i.ibb.co/HxFnnJp/Ballerina.jpg",
          tags: "Casual/Formal",
        },
        {
          imageUrl: "https://i.ibb.co/GHmjkx7/Blocked-Heels.jpg",
          category: "Heels ",
          name: "Blocked Heels",
          description: "High heel sandals for women",
          id: "27",
          price: "150",
          colour: "Nude",
          tags: "women/Casual/Formal",
        },
        {
          colour: "Black",
          category: "Boots ",
          tags: "Casual",
          id: "28",
          description: "Women's black heeled boots",
          imageUrl: "https://i.ibb.co/cknSynN/Heeled-Boots.jpg",
          price: "150",
          name: "Heeled Boots",
        },
        {
          tags: "Casual/Formal",
          price: "160",
          id: "29",
          category: "Heels ",
          colour: "Black",
          imageUrl: "https://i.ibb.co/G2VNvg0/Stiletto-Heels.jpg",
          name: "Stilettos",
          description: "Pencil heel black party wear sandals",
        },
        {
          colour: "Blue",
          tags: "Formal",
          category: "Heels ",
          imageUrl: "https://i.ibb.co/ryRyw0h/Pump-Heels.jpg",
          id: "30",
          description: "Women's Blue formal shoes",
          name: "Pumps",
          price: "180",
        },
      ],
    },
    {
      routeName: "mens",
      id: "ZYyZQZW15IdkTgig9NN3",
      title: "Mens",
      items: [
        {
          colour: "Burgundy",
          description: "Black shirt with white dots",
          tag: "Formal/Casual",
          price: "26",
          imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
          name: "Burgundy Shirt",
          id: "31",
          category: "Mens / Shirt",
        },
        {
          tag: "Casual",
          id: "32",
          name: "Pink Shirt",
          price: "26",
          colour: "Pink",
          imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
          description: "Pink shirt with floral texture",
          category: "Mens / Shirt",
        },
        {
          price: "25",
          name: "Floral T-shirt",
          category: "Mens/ Tshirt",
          id: "33",
          colour: "Floral",
          description: "Blue shirt with floral texture",
          imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
          tag: "Casual",
        },
        {
          id: "34",
          category: "Mens / Tshirt",
          price: "25",
          name: "Navy-blue T-shirt",
          tag: "Casual",
          imageUrl: "https://i.ibb.co/Jtp4zss/aeda.jpg",
          colour: "Navy blue",
          description: "Round neck Blue T-shirt",
        },
        {
          tag: "Casual",
          description: "Round neck full sleeves with multiple color strips ",
          colour: "White",
          id: "35",
          name: "Multi-color T-shirt",
          category: "Mens / Full sleeves",
          price: "25",
          imageUrl: "https://i.ibb.co/xX36psn/multi-color-tshirt.jpg",
        },
        {
          name: "Yellow T-shirt",
          category: "Mens / Tshirt",
          colour: "Yellow",
          tag: "Casual",
          price: "25",
          id: "36",
          imageUrl: "https://i.ibb.co/9nWhr2h/yellow-tshirt.jpg",
          description: "Yellow T-shirt with black stripes ",
        },
        {
          id: "37",
          imageUrl: "https://i.ibb.co/DGWTWL2/grey.jpg",
          description: "Plane Grey T-shirt",
          category: "Mens / Tshirt",
          name: "Grey T-shirt",
          price: "22",
          colour: "Grey",
          tag: "Casual",
        },
        {
          description: "Plane white T-shirt",
          category: "Mens / Tshirt",
          imageUrl: "https://i.ibb.co/KW02X3t/white-tshirt.jpg",
          name: "White T-shirt",
          price: "25",
          colour: "White",
          tag: "Casual",
          id: "38",
        },
        {
          id: "39",
          imageUrl: "https://i.ibb.co/HNJz9CY/Round-neck-full-sleeves.jpg",
          category: "Mens / Full sleeves",
          description: "Plane Blue full sleeves",
          colour: "Black",
          name: "Round neck full sleeves",
          tag: "Casual",
          price: "28",
        },
        {
          imageUrl: "https://i.ibb.co/0B7cCG4/Orange-Full-sleeve.png",
          name: "Orange full sleeves",
          description: "Plane red full sleeves",
          id: "40",
          category: "Mens / Full sleeves",
          colour: "Orange",
          price: "28",
          tag: "Casual",
        },
        {
          id: "41",
          price: "25",
          colour: "White",
          imageUrl: "https://i.ibb.co/6PjCMMj/collar-tshirt.jpg",
          tag: "Casual",
          category: "Mens / Tshirt",
          description: "Multicolor T-shirt with collar",
          name: "Collar T-shirt",
        },
        {
          id: "42",
          description: "Maroon cotton T-shirt",
          imageUrl: "https://i.ibb.co/GHk8Tqg/Maroon-tshirt.jpg",
          price: "30",
          tag: "Casual",
          category: "Mens / Tshirt",
          name: "Maroon T-shirt",
          colour: "Maroon",
        },
        {
          category: "Mens / Tshirt",
          description: "Green T-shirt with grey texture",
          imageUrl: "https://i.ibb.co/L5hgRxx/Green-tshirt.jpg",
          id: "43",
          colour: "Green",
          price: "25",
          tag: "Casual",
          name: "Green T-shirt",
        },
        {
          name: "Pink stripes T-shirt",
          imageUrl: "https://i.ibb.co/L1s0k0D/pink-stripes-tshirt.jpg",
          price: "30",
          category: "Mens / Tshirt",
          id: "44",
          tag: "Casual",
          description: "Pink T-shirt with blue stripes",
          colour: "Pink",
        },
        {
          colour: "Maroon",
          imageUrl: "https://i.ibb.co/j6RWNpQ/Maroon-shirt.jpg",
          category: "Mens / Shirt",
          price: "25",
          id: "45",
          name: "Maroon Shirt",
          description: "Maroon formal shirt",
          tag: "Formal",
        },
        {
          tag: "Casual",
          imageUrl: "https://i.ibb.co/PgWV8g9/textured-Shirt.jpg",
          name: "Textured Shirt",
          colour: "White",
          description: "White texture shirt with chinese collar",
          category: "Mens / Shirt",
          id: "46",
          price: "25",
        },
        {
          tag: "Casual",
          description: "Olive cotton shirt",
          imageUrl: "https://i.ibb.co/3vnXLRX/Olive-Shirt.jpg",
          price: "25",
          id: "47",
          colour: "Olive",
          category: "Mens / Shirt",
          name: "Olive Shirt",
        },
        {
          colour: "Light blue",
          tag: "Casual",
          imageUrl: "https://i.ibb.co/crMnxMx/light-blue-jeans.jpg",
          name: "Light blue Jeans",
          id: "48",
          category: "Mens / Jeans",
          description: "Light blue slim fit jeans",
          price: "30",
        },
        {
          imageUrl: "https://i.ibb.co/gSpNvGZ/ripped-jeans.jpg",
          price: "30",
          colour: "Blue",
          category: "Mens / Jeans",
          name: "Ripped Jeans",
          description: "Torn jeans with texture ",
          tag: "Casual",
          id: "49",
        },
        {
          name: "Black Jeans",
          category: "Mens / Jeans",
          tag: "Casual",
          description: "Black ripped jeans",
          imageUrl: "https://i.ibb.co/0c48Fkx/Black-Jeans.jpg",
          price: "31",
          id: "50",
          colour: "Black",
        },
        {
          description: "Plane grey jeans",
          name: "Grey Jeans",
          id: "51",
          price: "31",
          imageUrl: "https://i.ibb.co/bFphyVb/Grey-jeans.jpg",
          tag: "Casual",
          colour: "Grey",
          category: "Mens / Jeans",
        },
        {
          price: "30",
          tag: "Casual",
          name: "Denim Jeans",
          imageUrl: "https://i.ibb.co/MBpsPc0/Denim-jeans.jpg",
          description: "Drop Crotch jeans",
          id: "52",
          colour: "Grey",
          category: "Mens / Jeans",
        },
        {
          colour: "Dark blue",
          price: "30",
          category: "Mens / Jeans",
          description: "Simple dark blue jeans",
          id: "53",
          imageUrl: "https://i.ibb.co/BVbv4Bx/boot-leg-jeans.jpg",
          tag: "Casual",
          name: "Boot leg Jeans",
        },
        {
          id: "54",
          colour: "White",
          name: "Baseball Tshirt",
          category: "Mens / Full sleeves",
          imageUrl: "https://i.ibb.co/zsFLZy1/baseball-tshirt.jpg",
          price: "25",
          description: "White full sleeves with grey hands",
          tag: "Casual",
        },
        {
          description: "Black full sleeves with white checks",
          category: "Mens / Full sleeves",
          name: "Black checks T-shirt",
          colour: "Black",
          tag: "Casual",
          id: "55",
          imageUrl: "https://i.ibb.co/3yxp62R/Black-checks-tshirt.jpg",
          price: "26",
        },
        // adding new data
        {
          id: 93,
          name: "High Collar T-shirt",
          price: 45,
          description: "Black high collar T-shirt",
          tag: "Casual",
          category: "Mens / Tshirt",
          colour: "Black",
          imageUrl: "https://i.ibb.co/hRnvN9S/High-collar-Tshirt.jpg",
        },
        {
          id: 94,
          name: "3D Poker T-shirt",
          price: 40,
          description: "Navy Blue color T-shirt",
          tag: "Casual",
          category: "Mens / Tshirt",
          colour: "Navy blue",
          imageUrl: "https://i.ibb.co/f0hb75J/3-D-poker-T-shirt.jpg",
        },
        {
          id: 95,
          name: "Christ T-shirt",
          price: 35,
          description: "White T-shirt",
          tag: "Casual",
          category: "Mens / Tshirt",
          colour: "White",
          imageUrl: "https://i.ibb.co/7YMkRcv/Christ-T-shirt.jpg",
        },
        {
          id: 96,
          name: "Oversized Grey T-shirt",
          price: 35,
          description: "Grey T-shirt",
          tag: "Casual",
          category: "Mens / Tshirt",
          colour: "Grey",
          imageUrl: "https://i.ibb.co/r37ZKYB/Oversized-Grey-T-shirt.jpg",
        },
        {
          id: 97,
          name: "Black oversized T-shirt",
          price: 41,
          description: "Black T-shirt",
          tag: "Casual",
          category: "Mens / Tshirt",
          colour: "Black",
          imageUrl: "https://i.ibb.co/s5yVs9s/Black-oversized-Tshirt.jpg",
        },
        {
          id: 98,
          name: "Translucent Black Shirt",
          price: 50,
          description: "Black silk Shirt",
          tag: "Casual",
          category: "Mens / Shirt",
          colour: "Black ",
          imageUrl: "https://i.ibb.co/G3DJFq5/Translucent-Mns-shirt.jpg",
        },
        {
          id: 99,
          name: "Textured Brown Shirt",
          price: 30,
          description: "Textured Shirt",
          tag: "Casual",
          category: "Mens / Shirt",
          colour: "Brown",
          imageUrl: "https://i.ibb.co/rf9GsB4/Textured-Shirt.jpg",
        },
        {
          id: 100,
          name: "Formal Navy Shirt",
          price: 35,
          description: "Navy Blue Shirt",
          tag: "Formal",
          category: "Mens / Shirt",
          colour: "Navy blue",
          imageUrl: "https://i.ibb.co/4TdGnXq/Fomal-Navy-Shirt.jpg",
        },
        {
          id: 101,
          name: "Formal Green Shirt",
          price: 25,
          description: "Green Shirt",
          tag: "Formal",
          category: "Mens / Shirt",
          colour: "Green",
          imageUrl: "https://i.ibb.co/XbYy9fH/Formal-Green-Shirt.jpg",
        },
        {
          id: 102,
          name: "Formal Yellow Shirt",
          price: 40,
          description: "Yellow Shirt",
          tag: "Formal ",
          category: "Mens / Shirt ",
          colour: "Yellow",
          imageUrl: "https://i.ibb.co/02tWvjf/Formal-Yellow-Shirt.jpg",
        },
        {
          id: 103,
          name: "White textured kurta",
          price: 35,
          description: "White Kurta",
          tag: "Casual",
          category: "Mens / Kurta",
          colour: "White",
          imageUrl: "https://i.ibb.co/CVGsvdS/White-Textured-Kurta.jpg",
        },
        {
          id: 104,
          name: "Yellow Designer kurta",
          price: 30,
          description: "Yellow Kurta",
          tag: "Casual",
          category: "Mens / Kurta",
          colour: "Yellow ",
          imageUrl: "https://i.ibb.co/31hLGWR/Yellow-Designer-Kurta.jpg",
        },
        {
          id: 105,
          name: "Grey Designer Kurta",
          price: 30,
          description: "Grey Kurta",
          tag: "Casual",
          category: "Mens / Kurta",
          colour: "Grey",
          imageUrl: "https://i.ibb.co/VBpcC5Y/Grey-Designer-Kurta.jpg",
        },
        {
          id: 106,
          name: "Puma Black Jersey",
          price: 25,
          description: "Black Jersey",
          tag: "Casual",
          category: "Mens / Jersey",
          colour: "Black",
          imageUrl: "https://i.ibb.co/KGvbvbP/Puma-Black-Jersey.jpg",
        },
        {
          id: 107,
          name: "Nike Yellow Jersey",
          price: 35,
          description: "Yellow Jersey",
          tag: "Casual",
          category: "Mens / Jersey",
          colour: "Yellow",
          imageUrl: "https://i.ibb.co/wMvkfFn/Nike-Yellow-Jersey.jpg",
        },
        {
          id: 108,
          name: "RCB Jersey",
          price: 45,
          description: "Red Jersey",
          tag: "Casual",
          category: "Mens / Jersey",
          colour: "Red",
          imageUrl: "https://i.ibb.co/pQPTq8Q/RCB-Jersey.jpg",
        },
        {
          id: 109,
          name: "MI Jersey",
          price: 40,
          description: "Blue Jersey",
          tag: "Casual",
          category: "Mens / Jersey",
          colour: "Blue",
          imageUrl: "https://i.ibb.co/mbTXhLD/MI-Jersey.jpg",
        },
        {
          id: 110,
          name: "Olive Joggers",
          price: 42,
          description: "Olive cotton Joggers",
          tag: "Casual",
          category: "Mens / Joggers",
          colour: "Olive",
          imageUrl: "https://i.ibb.co/9wfd7g0/Olive-Joggers.jpg",
        },
        {
          id: 111,
          name: "Black Joggers",
          price: 32,
          description: "Black Polyester joggers",
          tag: "Casual",
          category: "Mens / Joggers",
          colour: "Black",
          imageUrl: "https://i.ibb.co/JyDLfr3/Black-Joggers.jpg",
        },
        {
          id: 112,
          name: "Blue Joggers",
          price: 44,
          description: "Blue Polyester joggers",
          tag: "Casual",
          category: "Mens / Joggers",
          colour: "Blue",
          imageUrl: "https://i.ibb.co/C7PSk1n/Blue-Joggers.jpg",
        },
        {
          id: 113,
          name: "Red Joggers",
          price: 30,
          description: "Red Cotton Joggers",
          tag: "Casual",
          category: "Mens / Joggers ",
          colour: "Red",
          imageUrl: "https://i.ibb.co/F5T0trV/Red-Joggers.jpg",
        },
        {
          id: 114,
          name: "Grey Joggers",
          price: 30,
          description: "Grey Cotton joggers",
          tag: "Casual",
          category: "Mens / Joggers",
          colour: "Grey",
          imageUrl: "https://i.ibb.co/KNBjLJy/Grey-Joggers.jpg",
        },
      ],
    },
    {
      routeName: "womens",
      id: "ZaQmvrE7lNEsxKRy0JA0",
      title: "Womens",
      items: [
        {
          category: "Women / Dress",
          id: "56",
          price: "30",
          name: "Blue Aline Dress",
          imageUrl: "https://i.ibb.co/TKqfyyP/types-od-dress-aline.jpg",
          description: "Well fitted knee length Aline dress",
          colour: "Blue",
          tags: "Casual",
        },
        {
          id: "57",
          category: "Women / Dress",
          name: "Bodycon Dress",
          price: "30",
          tags: "Formal",
          colour: "Purple",
          description: "Well fitted knee length bodycon dress",
          imageUrl: "https://i.ibb.co/TbRBPFh/types-od-dress-bodycon.jpg",
        },
        {
          id: "58",
          colour: "Golden",
          price: "25",
          name: "Cocktail Dress",
          description: "short gold detailed sleeveless dress with round neck",
          category: "Women / Dress",
          imageUrl: "https://i.ibb.co/8Dp56J5/types-od-dress-cocktail.jpg",
          tags: "Partywear",
        },
        {
          tags: "Casual",
          price: "25",
          id: "59",
          colour: "Grey",
          imageUrl: "https://i.ibb.co/7jmtF11/top1.jpg",
          category: "Women / Tops",
          description: "High collar long rugged top",
          name: "Batwing top",
        },
        {
          price: "20",
          imageUrl:
            "https://i.ibb.co/rHvSxT6/types-of-tops-July72020-4-min.jpg",
          tags: "Casual",
          id: "60",
          description: "light sleeveless white top with high neck",
          colour: "Black and white",
          name: "Casual sleeveless top",
          category: "Women / Tops",
        },
        {
          tags: "Formal",
          colour: "Multicolor",
          price: "25",
          id: "61",
          imageUrl:
            "https://i.ibb.co/MDpnH7W/1572334181d70ca745e624f77089045c31b64ec933-thumbnail-600x.webp",
          name: "Multocolored high necked top",
          description: "High neck full sleeved dark top",
          category: "Women / Tops",
        },
        {
          price: "25",
          category: "Women / Tops",
          imageUrl: "https://i.ibb.co/2802ZLL/floraltop.jpg",
          colour: "Multicolor",
          tags: "Casual",
          description: "Multicoloured bulged sleeve floral top with V neck",
          id: "62",
          name: "Floral full sleeved top",
        },
        {
          description: " midsleeve peplum crop top ",
          id: "63",
          colour: "Mustard yellow",
          price: "30",
          name: "Mid sleeved cropped top",
          imageUrl: "https://i.ibb.co/z8qwV57/mustard.jpg",
          tags: "Casual",
          category: "Women / Tops",
        },
        {
          id: "64",
          category: "Women / Tops",
          tags: "Partywear",
          description: "Regular v neck printed top ",
          price: "25",
          colour: "Red",
          imageUrl: "https://i.ibb.co/027P447/polka.jpg",
          name: "Red polka dots top",
        },
        {
          price: "30",
          name: "Skinny fit jeans",
          tags: "Partywear",
          imageUrl: "https://i.ibb.co/nRq8Rm4/j1.jpg",
          id: "65",
          colour: "Blue",
          category: "Women / Jeans",
          description: "Blue medium wash midrise jeans ",
        },
        {
          price: "30",
          tags: "Casual",
          colour: "Blue",
          category: "Women / Jeans",
          description: "Blue light wash midrise jeans ",
          imageUrl: "https://i.ibb.co/YZr5SHJ/j2.jpg",
          name: "Ankle length jeans",
          id: "66",
        },
        {
          description: "Light shade baggy midrise jeans ",
          id: "67",
          colour: "Blue",
          tags: "Casual",
          price: "30",
          name: "Baggy Boyfriend jeans",
          category: "Women / Jeans",
          imageUrl: "https://i.ibb.co/sJCyGGM/boyfriend-jeans-2.jpg",
        },
        {
          imageUrl: "https://i.ibb.co/m6n1n6s/Flared-jeans-2.jpg",
          description: "Dark shade black flared high rise jeans ",
          id: "68",
          price: "27",
          colour: "Black ",
          tags: "Partywear",
          category: "Women / Jeans",
          name: "Flared jeans ",
        },
        {
          id: "69",
          colour: "Blue ",
          price: "27",
          description: "Light wash blue midrise straight fit",
          imageUrl: "https://i.ibb.co/7nGVmgy/Mid-rise-straight-jeans.jpg",
          tags: "Formal",
          name: "Mid Rise Straight jeans ",
          category: "Women / Jeans",
        },
        {
          id: "70",
          price: "25",
          name: "High Rise skinny fit jeans ",
          category: "Women / Jeans",
          tags: "Formal",
          description: "Medium wash blue highrise jeans",
          imageUrl: "https://i.ibb.co/k52XG5v/High-Rise-skinny-fit-jeans.jpg",
          colour: "Blue",
        },
        {
          tags: "Partywear",
          colour: "Black ",
          category: "Women / Top",
          id: "71",
          price: "30",
          description: "Off shoulder ruffled top",
          imageUrl: "https://i.ibb.co/R6gYz9Y/Ruffled-top.jpg",
          name: "Ruffled top ",
        },
        {
          colour: "Blue",
          category: "Women / Top",
          id: "72",
          tags: "Casual",
          name: "Denim Regular Top",
          description: "Regular straight fit top",
          imageUrl: "https://i.ibb.co/vZ3bjxk/Denim-top.jpg",
          price: "25",
        },
        {
          price: "25",
          colour: "Pink",
          imageUrl: "https://i.ibb.co/YNDBB9c/Peplum-top.jpg",
          name: "Peplum Top ",
          description: "Floral bell sleeves peplum top ",
          tags: "Casual",
          category: "Women / Top",
          id: "73",
        },
        {
          name: "Round Solid Neck T-shirt",
          colour: "Olive Green",
          description: "Round neck regular sleeves tshirt",
          category: "Women / Top",
          price: "25",
          id: "74",
          imageUrl: "https://i.ibb.co/Gd0rtRB/Solid-round-neck-tshirt.jpg",
          tags: "Casual",
        },
        {
          description: "Round neck printed top",
          name: "Printed Cropped T-shirt ",
          colour: "White",
          category: "Women / Top",
          id: "75",
          tags: "Casual",
          imageUrl: "https://i.ibb.co/8XTxsD4/Printed-Cropped-tshirt.jpg",
          price: "25",
        },
        {
          name: "Turtle Neck Top ",
          colour: "Pink",
          price: "27",
          category: "Women / Top",
          id: "76",
          imageUrl: "https://i.ibb.co/sJtjQ7f/Turtle-neck-tshirt.jpg",
          description: "Full sleeves turtle neck cotton tshirt",
          tags: "Partywear",
        },
        {
          colour: "Green",
          imageUrl: "https://i.ibb.co/n0kBj8g/casual-tshirt-dress.jpg",
          price: "27",
          tags: "Partywear",
          id: "77",
          category: "Women / Dress",
          description: "Regular fit dress",
          name: "Casual T-shirt Dress",
        },
        {
          id: "78",
          imageUrl: "https://i.ibb.co/mC9TgZm/Basic-Solid-Jumpsuit.jpg",
          price: "30",
          tags: "Formal",
          colour: "Blue",
          name: "Solid Basic Jumpsuit ",
          category: "Women / Dress",
          description: "Solid sleeveless jumpsuit ",
        },
        {
          imageUrl: "https://i.ibb.co/7yJZ1xm/denim-dungaree-dress.jpg",
          id: "79",
          tags: "Partywear",
          price: "30",
          category: "Women / Dress",
          name: "Denim Dungaree",
          description: "Short light washed dungaree dress",
          colour: "Blue",
        },
        {
          category: "Women / Dress",
          colour: "Blue",
          imageUrl: "https://i.ibb.co/PQCKDJF/Solid-Maxi-dress.jpg",
          name: "Solid Maxi Dress",
          description: "High Slit v neck sleeveless maxi dress ",
          id: "80",
          tags: "Partywear",
          price: "35",
        },
      ],
    },
    {
      routeName: "hats",
      id: "mltI8Z9A4SxqTqnXIAes",
      title: "Hats",
      items: [
        {
          description: "Summer hat with ribbon scarf around it",
          tags: "Women ",
          colour: "brown",
          id: "81",
          name: "Brown Brim",
          price: "25",
          imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
          category: "brim",
        },
        {
          price: "18",
          colour: "blue",
          imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
          description: "Solid wollen beany ",
          id: "82",
          tags: "Women ",
          category: "beanie",
          name: "Blue Beanie",
        },
        {
          tags: "Women ",
          id: "83",
          colour: "brown",
          price: "35",
          category: "hat",
          imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
          description: "Summer hat with leather belt around it ",
          name: "Brown Cowboy",
        },
        {
          imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
          category: "brim",
          tags: "Men",
          name: "Grey Brim",
          colour: "grey",
          id: "84",
          price: "25",
        },
        {
          imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
          tags: "Women ",
          colour: "green",
          id: "85",
          category: "beanie",
          price: "18",
          name: "Green Beanie",
        },
        {
          colour: "teal",
          imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
          id: "86",
          tags: "Men",
          category: "cap",
          price: "14",
          name: "Palm Tree Cap",
        },
        {
          price: "18",
          colour: "red",
          tags: "Women ",
          id: "87",
          name: "Red Beanie",
          category: "beanie",
          imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        },
        {
          tags: "Men ",
          id: "88",
          name: "Wolf Cap",
          category: "cap",
          colour: "blue",
          price: "14",
          imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        },
        {
          price: "16",
          category: "cap",
          name: "Blue Snapback",
          imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
          colour: "blue",
          tags: "Women ",
          id: "89",
        },
      ],
    },
  ];

  //Add item to cart
  const ListItem = (itemCollection, pname) => {
    itemCollection.map(({ items }) => {
      if (findItem(items, pname)) {
        console.log(findItem(items, pname));
        console.log(pname);
        dispatch(addItem(findItem(items, pname)));
      }
    });
  };

  const findItem = (items, pname) => {
    const itemReturned = items.find((item) => {
      return item.name.toLowerCase() === pname.toLowerCase();
    });
    return itemReturned;
    // console.log(itemReturned)
  };

  //Remove item from cart
  const ListItemToRemove = (itemCollection, pname) => {
    itemCollection.map(({ items }) => {
      if (findItemToRemove(items, pname)) {
        console.log(findItemToRemove(items, pname));
        dispatch(removeItem(findItemToRemove(items, pname)));
      }
    });
  };

  const findItemToRemove = (items, pname) => {
    const itemReturned = items.find((item) => {
      return item.name.toLowerCase() === pname.toLowerCase();
    });
    return itemReturned;
  };


  useEffect(() => {
    alanBtn({
      key: "a87a1bd094bc9263ed0f700c624623d12e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "open-cart") {
          dispatch(toggleCartHidden());
        } else if (commandData.command === "close-cart") {
          dispatch(toggleCartHidden());
        } else if (commandData.command === "show-sneakers") {
          history.push("/");
          history.push("shop/sneakers");
        } else if (commandData.command === "show-hats") {
          history.push("/");
          history.push("shop/hats");
        } else if (commandData.command === "show-mens") {
          history.push("/");
          history.push("shop/mens");
        } else if (commandData.command === "show-womens") {
          history.push("/");
          history.push("shop/womens");
        } else if (commandData.command === "show-jackets") {
          history.push("/");
          history.push("shop/jackets");
        } else if (commandData.command === "open-contact") {
          history.push("/");
          history.push("contact");
        } else if (commandData.command === "open-home") {
          history.push("/");
        } else if (commandData.command === "open-signin") {
          history.push("/");
          history.push("/signin");
        } else if (commandData.command === "open-checkout") {
          history.push("/");
          history.push("/checkout");
        } else if (commandData.command === "add-item") {
          const { name } = commandData.payload;
          console.log(itemCollection);
          ListItem(itemCollection, name);
        } else if (commandData.command === "remove-item") {
          const { name } = commandData.payload;
          //  console.log("In remove" + name);
          // console.log(itemCollection);
          ListItemToRemove(itemCollection, name);
        } else if (commandData.command === "scroll-down") {
          window.scrollBy({ top: 200, left: 0, behavior: "smooth" });
        } else if (commandData.command === "scroll-up") {
          window.scrollBy({ top: -200, left: 0, behavior: "smooth" });
        } else if (commandData.command === "scroll-top") {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (commandData.command === "scroll-bottom") {
          window.scrollTo({
            top: 5000,
            left: 0,
            behavior: "smooth",
          });
        } else if (commandData.command === "filter-by-color") {
          const { color } = commandData.payload;
          dispatch(colorTermFilter(color));
        } else if (commandData.command === "filter-by-category") {
          const { category } = commandData.payload;
          dispatch(categoryTermFilter(category));
        } 
        // else if (commandData.command === "filter-by-description") {
        //   const { description } = commandData.payload;
        //   dispatch(searchTermFilter(description));
        // } 
        else if (commandData.command === "filter-above") {
          const { higher } = commandData.payload;
          dispatch(rangeTermFilter1(higher));
        } else if (commandData.command === "filter-below") {
          const { lower } = commandData.payload;
          dispatch(rangeTermFilter2(lower));
        } else if (commandData.command === "clear-filters") {
          dispatch(clearFilters());
        }
      },
    });
    // return () => console.log("UMOUNT")
  }, []);

  return null;
};

export default useAlan;
