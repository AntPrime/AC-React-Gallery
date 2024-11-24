import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [galleryList, setGalleryList] = useState([])
  let [likeToChange,likesSetter] = useState(0)

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

  const updateLikes = (event, itemId ) =>{
    event.preventDefault()

  const updatingLike = {
    likes: likeToChange
  }
  axios({
    method: 'PUT',
    url: `/api/gallery/like/${itemId}`,
    data: updatingLike
})
    .then((response) => {
        fetchGallery();
console.log("PUT", response)
        likesSetter(likeToChange + 1)
    })
    .catch((error) => {
        console.log('Error on add:', error);
    });
  }

    return (<>
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>

              
             
            {galleryList.map((gallery) => (
                      <div key={gallery.id}  data-testid="galleryList">
                         <img data-testid="galleryItem" src={gallery.url} /> <br />{gallery.title} <br />
                         <button onClick={() => updateLikes(event, gallery.id)}>Love it!</button> <br />
                         {gallery.likes} people love this! 
                         </div>
               
                      ))}
                    
                
        -- Added an onclick to the img bellow and can see that it works to fetch when clicked
        <img src="images/goat_small.jpg"/>
        <img onClick={fetchGallery} src="images/goat_stache.png"/>
       
      </div>
      </> );
}

export default App;
