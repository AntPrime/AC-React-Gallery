import React, { useState } from "react";
import axios from "axios";

function GalleryItem({ gallery, fetchGallery }) {
  // State for tracking selected image and likes
  const [selectedImageId, setSelectedImageId] = useState('');
  const [likes, setLikes] = useState(gallery.likes);

  // Update likes when the "Love it!" button is clicked
  const updateLikes = (id) => {
    axios({
      method: "PUT",
      url: `/api/gallery/like/${id}`,
      data: { likes: likes + 1 },
    })
      .then((response) => {
        console.log("PUT response:", response.data);
        setLikes(likes + 1); // Update local state
        fetchGallery(); // Refresh the gallery
      })
      .catch((error) => {
        console.log("Error updating likes:", error);
      });
  };

  // Toggle between showing the image and the description
  const toggleDescription = (id) => {
    // got some help from Phind to see why my test weren't passing
    setSelectedImageId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="galleryList" data-testid="galleryItem">
      {selectedImageId === gallery.id ? (
        // Show the description if selected
        <p 
          onClick={() => toggleDescription(gallery.id)}
          style={{ cursor: "pointer" }}
          data-testid="toggle"
          className="innerText"
        >
          {gallery.description}
        </p>
      ) : (
        // Show the image if not selected
        <img
          src={gallery.url}
          alt={gallery.title}
          onClick={() => toggleDescription(gallery.id)}
          style={{ cursor: "pointer" }}
          data-testid="toggle"
          className="innerImg"
        />
      )}
      {/* Additional content such as title, button, and likes */}
      <br />
      {gallery.title}
      <br />
      <div className="innerLike">
        <button
          data-testid="like"
          onClick={() => updateLikes(gallery.id)}
        >
          Love it!
        </button>
        <br />
        {likes} people love this!
      </div>
    </div>
  );
}

export default GalleryItem;