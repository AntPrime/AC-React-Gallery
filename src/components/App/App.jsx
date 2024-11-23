import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [galleryList, setGalleryList] = useState([])

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

    return (<>
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>

        <p data-testid="galleryList"> What goes here?</p>
        
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
      </div>
      </> );
}

export default App;
