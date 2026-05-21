# Movie Explorer App

## Overview

Build a Movie Explorer application that allows users to browse movies based on their preferences.

Users should select a genre and enter the number of movies to display.  
Use a public movie API (such as TMDB) to fetch data and render movie cards dynamically.

Each movie card should display the poster, title, rating, and overview.  
Include a “Sort by Rating” toggle feature to reorder the results.

## Requirements

- Fetch data using a public movie API
- Handle loading and error states
- Implement sorting functionality
- Use a responsive card-based layout

The UI should resemble a modern streaming-style layout.

## UI Note

You are expected to design the interface independently while meeting all functional requirements.

<!-- solution -->

alr, a movie poster is always of 2:3 ratio that is for every 2 pixel of width there should be 3 pixels of height on it.

we are currently solving the card problem, then ill think about the grid and lastly, we will go through the entire markup once.

https://developer.themoviedb.org/docs/image-basics
how you ask for an image,

we need the base url, file size or the size of the poster, wxh and lastly need the file path which is here in movie.json only, so we are going to manually request these datas for now, later we will let the front do the work.

base_url: http://image.tmdb.org/t/p/
backdrop_sizes: ["w300", "w780", "w1280", "original"]

<!-- for hail mary -->

https://image.tmdb.org/t/p/original/2I1OFQJ0L9T0dpU6FobKFWV2PxX.jpg
