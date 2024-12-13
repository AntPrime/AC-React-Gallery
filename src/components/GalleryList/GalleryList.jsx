import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

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
  
    const updateLikes = (id) =>{
  
    axios({
      method: 'PUT',
      url: `/api/gallery/like/${id}`,
      data: {
        likes: likeToChange
      }
  })
      .then((response) => {
          fetchGallery();
  console.log("PUT", response.data)
          likesSetter(likeToChange + 1)
      })
      .catch((error) => {
          console.log('Error on add:', error);
      });
    }
  
    const toggleDescription = (id) => {
      // got some help from Phind to useState to change the IMG/Description
      
        setSelectedImageId(null);
      }; 
  
      const toggleImage = (id) =>{
       setSelectedImageId(id)
    };
  
  return

  <div data-testid="galleryList">
  {galleryList.map((gallery) => (
    <div key={gallery.id}>
      {selectedImageId === gallery.id ? (
        // If the image is selected, show the description instead
        <div data-testid="galleryItem">
          <p 
            onClick={() => toggleDescription(gallery.id)} 
            // Can help provide a curser so that people know the img is clickable
            style={{ cursor: 'pointer' }}
            data-testid="toggle"
          >
            {gallery.description}
          </p>
        </div>
      ) : (
        // If the image is not selected, show the image
        <div data-testid="galleryItem" >
          <img
            src={gallery.url}
            alt={gallery.title}
            onClick={() => toggleImage(gallery.id)}
        // Add pointer cursor to indicate it's clickable
            style={{ cursor: 'pointer' }} 
          />
          <br/>
          <div>{gallery.title}
          <br/>
          <button onClick={() => updateLikes(gallery.id)}>Love it!</button>
          <br/>
          <div data-testid="like"> {gallery.likes} people love this!</div>
          </div>
        </div>
      )}
    </div>
  ))}
  </div>
};
