import { createSlice } from "@reduxjs/toolkit";
const Img1 = "https://nest.botble.com/storage/products/11-1-400x400.jpg";
const Img2 = "https://nest.botble.com/storage/products/19-1-400x400.jpg";
const initialState = [
  {
    id: 1,
    category: "Home Appliances",
    productImg: [Img1,Img2],
    productTitle: "Smart Vacuum Cleaner",
    rating: 4.8,
    ratingTitle: "(10)",
    productPrice: 4999,
    discount: "",
    productBadge: true,
    p_badgeTitle: "Exclusive Deal",
    PopUp: false,
  },
  {
    id: 2,
    category: "Electronics",
    productImg: [Img1,Img2],
    productTitle: "Wireless Headphones",
    rating: 4.5,
    ratingTitle: "(20)",
    productPrice: 2999,
    discount: 10.0,
    productBadge: false,
    p_badgeTitle: "Limited Stock",
  },
  {
    id: 3,
    category: "Home Appliances",
    productImg: [Img1,Img2],
    productTitle: "Electric Mixer",
    rating: 4.7,
    ratingTitle: "(15)",
    productPrice: 1999,
    discount: 20.0,
    productBadge: true,
    p_badgeTitle: "Best Seller",
  },
  {
    id: 4,
    category: "Furniture",
    productImg: [Img1,Img2],
    productTitle: "Comfortable Sofa",
    rating: 4.6,
    ratingTitle: "(8)",
    productPrice: 15999,
    discount: 25.0,
    productBadge: false,
    p_badgeTitle: "Exclusive Offer",
  },
];

export const TopSellingProSlice=createSlice({
    name:"topSelling Products",
    initialState:initialState,
    reducers:{
        addToTopSelling:(state,action)=>{
            let productID=action.payload.id;
            let exsit=state.some(elem=> elem.id==productID);
            if(!exsit) state.push(action.payload)
        }
    }
})

export const {addToTopSelling}=TopSellingProSlice.actions;
export default TopSellingProSlice.reducer