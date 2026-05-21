// setTimeout(() => {
//   const url = "https://api.themoviedb.org/3/movie/687163/images";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTA0N2NhODc4OTBjZDM1Yjc5ODZkZmIwNjRiMmM0NSIsIm5iZiI6MTc3OTEzMDA4NC4wNzAwMDAyLCJzdWIiOiI2YTBiNWVlNGM5YWM3OWMwMWJhYWZhZmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1SF0ljrDUXB4bh5JO4aSCfxwGiT-9qpksYxLauqqTQI",
//     },
//   };

//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error(err));
// }, 2000);
const moctaleNodeElements = {
  movieCards: document.getElementById("movieCards"),
  moctaleLogo: document.getElementById("logo"),
  explore: document.getElementById("explore"),
  categories: document.getElementById("categories"),
  search: document.getElementById("search"),
  exploreScreen: document.getElementById("body"),
  categoriesScreen: document.getElementById("categoriesScreen"),
  parentCatogeryCard: document.getElementById("parentCharCard"),
  searchCategoryInput: document.getElementById("searchCategories"),
};
const db = { isCategorySearchToggled: false, inputValue: "" };
let arr;
const genreArr = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const genreObj = {
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};

const chars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

fetch("./movie.json")
  .then((res) =>
    res
      .json()
      .then((body) => {
        arr = extractMovieNames(body);
        enrichMovieCardsBody(arr);
      })
      .catch((err) => console.log(err))
  )
  .catch((err) => console.log(err));
// fetch("./genres.json")
//   .then((res) =>
//     res
//       .json()
//       .then((body) => {
//         genreArr = extractGeneres(body);
//         console.log(genreArr);
//         // enrichMovieCardsBody(arr);
//       })
//       .catch((err) => console.log(err))
//   )
//   .catch((err) => console.log(err));

function extractMovieNames(body) {
  let arr = body.results;
  let movieNamesArr = arr.map((el) => {
    return {
      id: el.id,
      title: el.title,
      overview: el.overview,
      popularity: el.popularity,
      poster_path: el.poster_path,
      release_date: el.release_date,
      rating: el.vote_average,
    };
  });
  return movieNamesArr;
}
// function extractGeneres(body) {
//   let arr = body.genres;
//   let genresNames = arr.map((el) => {
//     return {
//       id: el.id,
//       name: el.name,
//     };
//   });
//   return genresNames;
// }
function enrichMovieCardsBody(data) {
  arr.forEach((e) => {
    moctaleNodeElements.movieCards.innerHTML += `<div class="movie-parent-card">
    <div class="movie-card">
      <img
        src="https://image.tmdb.org/t/p/original/${e.poster_path}"
        alt=""
      />
    </div>
    <p class="movie-name">${e.title}</p>
    <p class="content-type-and-year flex-center">
      <span class="content-type"> Movie </span>
       
     
    </p>
  </div>`;
    // <span class="year">${e.release_date}</span>
  });
}
function enrichGenreBody(data) {
  chars.forEach((c) => {
    if (!db.isCategorySearchToggled) {
      let arr = forACharacterReturnAllGenres(data, c);
      if (arr.length) {
        handleCreationOfAGenre(c, arr);
      }
    } else {
      handleFilteredGenreEnrichment(data);
    }
  });
}
function handleCategorySearchMode() {}
enrichGenreBody(genreObj);
function forACharacterReturnAllGenres(genreObj, character) {
  let arr = genreObj.genres.filter((e) => e.name.split("")[0] == character);
  return arr;
}
moctaleNodeElements.moctaleLogo.addEventListener("click", () => {
  handleScreenChange("explore");
});
moctaleNodeElements.explore.addEventListener("click", () => {
  window.location.reload();
});
moctaleNodeElements.searchCategoryInput.addEventListener("focusin", () => {
  toggleCategorySearchState(true);
});
moctaleNodeElements.searchCategoryInput.addEventListener("focusout", () => {
  toggleCategorySearchState(false);
});
moctaleNodeElements.searchCategoryInput.addEventListener("keyup", (e) => {
  db.inputValue = e.target.value;

  enrichGenreBody(genreGrouper(filteredGenreArr(genreObj)));
});
function handleScreenChange(screen) {
  if (screen == "explore") {
    console.log("here");
    hideCategoriesScreen();
    window.location.reload();
  } else if (screen == "categories") {
    hideExploreScreen();
    showCategoriesScreen();
  }
}

function hideCategoriesScreen() {
  moctaleNodeElements.categoriesScreen.style.display = "none";
}

function hideExploreScreen() {
  moctaleNodeElements.exploreScreen.style.display = "none";
}

function showCategoriesScreen() {
  moctaleNodeElements.categoriesScreen.style.display = "block";
}
moctaleNodeElements.categories.addEventListener("click", () => {
  handleScreenChange("categories");
});

function handleCreationOfAGenre(character, arr) {
  let charCard = document.createElement("div");
  charCard.classList.add("char-card");
  let h2 = document.createElement("h2");
  h2.innerText = character;
  let genreCardParent = document.createElement("div");
  genreCardParent.classList.add("genre-card-parent");

  arr.forEach((element) => {
    let genreCard = document.createElement("div");
    genreCard.classList.add("genre-card");
    genreCard.innerText = element.name;
    genreCardParent.appendChild(genreCard);
  });
  charCard.appendChild(h2);
  charCard.appendChild(genreCardParent);

  moctaleNodeElements.parentCatogeryCard.appendChild(charCard);
}

function toggleCategorySearchState(bool) {
  if (bool) {
    db.isCategorySearchToggled = bool;
    return db.isCategorySearchToggled;
  }
  db.isCategorySearchToggled = !db.isCategorySearchToggled;
  return db.isCategorySearchToggled;
}
function filteredGenreArr(data) {
  let arr = genreObjToNameAndCharObj(data);
  return arr.filter((e) => {
    let str = db.inputValue;
    str = str.toLowerCase();
    e = e.toLowerCase();
    return e.includes(str);
  });
}
function genreObjToNameAndCharObj(data) {
  return (genreNamesArr = data.genres.map((e) => {
    return e.name;
  }));
}

function handleFilteredGenreEnrichment(data) {
  clearGenreParent();
  data.forEach((element) => {
    handleCreationOfAGenre(element.character, element.arr);
  });
}

function clearGenreParent() {
  moctaleNodeElements.parentCatogeryCard.innerHTML = "";
}
// function genreGrouper(genreFilteredArr) {
//   let finalDB = [];
//   let tempDB = {
//     character: "",
//     arr: [],
//   };
//   genreFilteredArr.forEach((el) => {
//     if (!tempDB.character && !tempDB.arr.length) {
//       //the function running for the first time
//     }
//   });
// }

function genreGrouper(arr) {
  let finalDB = [];
  chars.forEach((c) => {
    let tempArr = forACharacterReturnAllGenres2(arr, c);
    tempArr = converterToObjSpecificallyHereOnly(tempArr);
    if (tempArr.length) {
      finalDB.push({ character: c, arr: tempArr });
    }
  });
  return finalDB;
}

function forACharacterReturnAllGenres2(arr, c) {
  return arr.filter((e) => {
    return e.split("")[0] == c;
  });
}

function converterToObjSpecificallyHereOnly(arr) {
  return arr.map((e) => {
    return { name: e };
  });
}
