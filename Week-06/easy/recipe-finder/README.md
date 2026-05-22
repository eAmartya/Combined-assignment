# Recipe Finder

## Overview

Build a Recipe Finder application that allows users to explore recipes based on cuisine preferences.

Users should select a cuisine type and enter the number of recipes to display.  
Use a public recipe API to fetch data dynamically.

Render recipe cards showing the image, title, and a brief description.  
Optionally, allow users to view full details in a modal or separate section.

## Requirements

- Fetch data using a public recipe API
- Handle loading and error states
- Render responsive recipe cards
- Support cuisine selection and result limit
- Ensure clean state management

The UI should resemble a modern food browsing interface.

## UI Note

You are expected to design the interface independently while meeting all functional requirements.

alr, here is our soltuion 3hrs timer whatever i code is my final submission here.

1st hour the basic MVP should be working

<!-- sends me all the categories -->

www.themealdb.com/api/json/v1/1/categories.php

<!-- this sends us all the foods in a category -->

www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

<!-- everything about a single meal -->

www.themealdb.com/api/json/v1/1/lookup.php?i=52772

alright since the mealdb doesnt allow you to give them a filtering thingy which enables them to only send x amount of meals and stuff, its a redundant front end filtering problem which can be done under 30mins but i cant be bothered tbh. so this is my final submission
