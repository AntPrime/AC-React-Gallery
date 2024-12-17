import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import GalleryList from "../../GalleryList/GalleryList";


function App() {

  // const [galleryList, setGalleryList] = useState([])
  // const [likeToChange,likesSetter] = useState(0)
  // const [selectedImageId, setSelectedImageId] = useState(null);

  // useEffect(()=>{
  //   fetchGallery();},[])

  // const fetchGallery = () =>{
  //   console.log("fetching..")

  //   axios({
  //     method: "GET",
  //     url: "/api/gallery"
  // })
  // .then((response) => {
  //     console.log("Response: ", response.data)
  //     setGalleryList(response.data)
  // })
  // .catch((err) => {
  //     console.log("GET /api/gallery is broken")
  // })
  // }

  // const updateLikes = (id) =>{

//   axios({
//     method: 'PUT',
//     url: `/api/gallery/like/${id}`,
//     data: {
//       likes: likeToChange
//     }
// })
//     .then((response) => {
//         fetchGallery();
// console.log("PUT", response.data)
//         likesSetter(likeToChange + 1)
//     })
//     .catch((error) => {
//         console.log('Error on add:', error);
//     });
//   }

//   const toggleDescription = (id) => {
//     // got some help from Phind to useState to change the IMG/Description
    
//       setSelectedImageId(null);
//     }; 

//     const toggleImage = (id) =>{
//      setSelectedImageId(id)
//   };

  // landed on one big Ternary Operator to put it inside of the Return
// got some help from Find to figure out how to correctly setup the div's in the HTML 
return (<>
        
         <header data-testid="app">
           <h1>React Gallery</h1>
         </header>

        <GalleryList/>
          
        </>);
}

export default App;
