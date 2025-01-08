

# Anthony's React Gallery

This is a full-stack gallery application that allows users to view images, toggle descriptions, and like items. I included the capability to post new images with there title and description along with the ability to delete items from the database.

Find setup and installation tips below. 

## Features

*   Displays a gallery of images with descriptions.
*   Toggles between showing the image and description on click.
*   Allows users to like gallery items.
*   Includes POST and DELETE routes for managing gallery items (already implemented).

## Technologies Used

*   React
*   Node.js
*   Express
*   (Potentially other technologies like a database, specify if used)

## Server-Side Routes

*   `GET /api/gallery`: Retrieves an array of gallery item objects. Each object contains information about a single gallery item (e.g., id, url, title, description, likes).
*   `PUT /api/gallery/like/:id`: Increments the `likes` value of a specific gallery item (identified by its `id`) by 1. Returns an HTTP status code 200 on success.
*   `POST /api/gallery`: Creates a new gallery item (already implemented).
*   `DELETE /api/gallery/:id`: Deletes a gallery item (already implemented).

## Client-Side Components

*   **GalleryList:**
    *   Fetches the gallery items from the `GET /api/gallery` endpoint on component mount.
    *   Stores the fetched data in React state.
    *   Renders a list of `GalleryItem` components by mapping over the state.
*   **GalleryItem:**
    *   Receives a single gallery item object as a prop.
    *   Toggles between displaying the image and its description when clicked (using conditional rendering).
    *   Displays the current number of likes for the item.
    *   Includes a "like" button that sends a `PUT /api/gallery/like/:id` request to the server when clicked.

## Setup and Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3.  Install server-side dependencies:

    ```bash
    cd server
    npm install
    ```

4.  Install client-side dependencies:

    ```bash
    cd ../client
    npm install
    ```

5.  (If applicable) Set up the database: (Add instructions if a database is used)

6.  Start the server:

    ```bash
    cd ../server
    npm run start:server
    ```

7.  Start the client:

    ```bash
    cd ../client
    npm run start
    ```

## Example Gallery Item Object

```json
{
  "id": 1,
  "url": "image_url.jpg",
  "title": "Image Title",
  "description": "Image description goes here.",
  "likes": 0
}

Here is a Image Gallery of of URL's that allow you to add likes and toggle between the description and the URL's image. 



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
