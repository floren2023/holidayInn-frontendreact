import React from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import '../../App.css'


// Import Swiper styles

import SwiperCarousel from "./SwiperCarousel";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
];

const Content = () => {
  return (
  <div className="mt-200 p-10 bg-neutral-100">
    <div className="  grid grid-cols-3">
      
      <div className="px-20 py-10 bg-orange-100 mb-10 mt-5 col-span-2 text-md font-style" >
                Welcome to Holidays Inn, your premier destination for luxury hotel bookings. Our platform is committed to providing you with the best rates and exceptional customer service. Whether you're planning a business trip, a romantic getaway, or a family vacation, our curated selection of hotels
       ensures you'll find the perfect accommodation to suit your needs. 
      </div>
      <div>
      <h2 className="text-2xl text-teal-700  p-8 uppercase mt-10">
        Our Rooms suits you
      </h2> 
      </div>
      </div>
      <div className="">
     {/*    <div>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div> */}
    <div className=" bg-orange-100 mb-10 mt-5 col-span-2 ml-10 mr-10 pl-10 pt-10">
    <h4 className="text-xl text-teal-700  uppercase mt-2">
        we offer our services for all ages and tastes
      </h4>
      <div className="p-5">
      
      <SwiperCarousel/>
    </div></div>
    </div>
    </div>
  );
};

export default Content;
