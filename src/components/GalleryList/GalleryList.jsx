import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";

function listGallery() {

    const [galleryList, setGalleryList] = useState([])
    let [likeToChange,likesSetter] = useState(0)
    const [selectedImageId, setSelectedImageId] = useState(null);

    useEffect(()=>{
      fetchGallery();},[])
  
    const fetchGallery = () =>{
      console.log("fetching..")
  
      axios({
        method: "GET",
        url: "/api/gallery"
    })
    .then((response) => {
        console.log("Response: ", response.data)
        setGalleryList(response.data)
    })
    .catch((err) => {
        console.log("GET /api/gallery is broken")
    })
    }
  
  return
  <div data-testid="galleryList">
  {galleryList.map((gallery, index) => (
    <GalleryItem key={index} gallery={gallery} fetchGallery={fetchGallery}/>
  ))}
  </div>
};
