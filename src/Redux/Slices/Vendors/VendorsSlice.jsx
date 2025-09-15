import { createSlice } from "@reduxjs/toolkit";
import { FaLetterboxd } from "react-icons/fa6";
let initialVendors = [
  {
    vendorName: "GoPro",
    rating: 4.5,
    contact: "+18439213901",
    address: "7425 Canyon Ridge Dr, Portland, Oregon, AE",
    logo: "https://nest.botble.com/storage/stores/1-800x800.png",
    sinceYear: 2010,
    description: "GoPro offers cutting-edge action cameras and accessories for adventure lovers.",
    socialLinks: {
      fb: "https://facebook.com/gopro",
      twitter: "https://twitter.com/gopro"
    }
  },
  {
    vendorName: "Global Office",
    rating: 4.7,
    contact: "+18439213902",
    address: "299 Hilltop Lane, Eugene, Oregon, AE",
    logo: "https://nest.botble.com/storage/stores/2-800x800.png",
    sinceYear: 2012,
    description: "Global Office specializes in modern and ergonomic office supplies and furniture.",
    socialLinks: {
      fb: "https://facebook.com/globaloffice",
      twitter: "https://twitter.com/globaloffice"
    }
  },
  {
    vendorName: "Young Shop",
    rating: 4.6,
    contact: "+18439213903",
    address: "1035 Marina Blvd, Salem, Oregon, AE",
    logo: "https://nest.botble.com/storage/stores/4-800x800.png",
    sinceYear: 2015,
    socialLinks: {
      fb: "https://facebook.com/globaloffice",
      twitter: "https://twitter.com/globaloffice"
    },
    description: "Young Shop delivers trendy lifestyle products for youth and young adults."
  },
  {
    vendorName: "Global Store",
    rating: 4.4,
    contact: "+18439213904",
    address: "6000 River Valley St, Bend, Oregon, AE",
    logo: "https://nest.botble.com/storage/stores/5-800x800.png",
    sinceYear: 2014,
    socialLinks: {
      fb: "https://facebook.com/globaloffice",
      twitter: "https://twitter.com/globaloffice"
    },
    description: "Global Store offers a wide range of home essentials and everyday goods."
  },
  {
    vendorName: "Robert's Store",
    rating: 4.8,
    contact: "+18439213905",
    address: "84 Redwood Plaza, Medford, Oregon, AE",
    logo: "https://nest.botble.com/storage/stores/1-800x800.png",
    sinceYear: 2016,
    description: "Robert's Store is known for health, skincare, and wellness essentials.",
    socialLinks: {
      fb: "https://facebook.com/robertsstore",
      twitter: "https://twitter.com/robertsstore"
    }
  }
];
  
const VendersSlice=createSlice({
    name:"venders",
    initialState:initialVendors,
    reducers:{}
})
export default VendersSlice.reducer