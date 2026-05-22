const links = {
  categories: "https://www.themealdb.com/api/json/v1/1/categories.php",
  allMealsInACategory: "https://www.themealdb.com/api/json/v1/1/filter.php?c=",
  singleMeal: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=",
};
const nodeElements = {
  errorSection: document.querySelector("section#error"),
  categoryParentCardHolder: document.getElementById("parentCategoryCardHolder"),
  allMealsOfACategory: document.getElementById("allMealsOfACategory"),
  categoryCard: document.querySelectorAll(".category-card"),
  modal: document.getElementById("modal"),
  modalCloseBtn: document.getElementById("closeButton"),
};
const db = {
  isACategorySelected: false,
};
async function fetchCategories() {
  try {
    let res = await fetch(links.categories);
    let text = await res.json();
    enrichCategoriesDataIntoSite(text);
  } catch (error) {
    console.log(error);
    showErrorPage();
  }
}
async function fetchAllMealsOfACategory(category) {
  try {
    let res = await fetch(`${links.allMealsInACategory}${category}`);
    let data = await res.json();
    console.log(data);
    enrichAllMealsFromACategoryDataIntoSite(data);
  } catch (error) {
    showErrorPage();
    console.log(error);
  }
}
fetchCategories();

// tempEnricher();
function enrichAllMealsFromACategoryDataIntoSite(mealsObj) {
  handleScreenChange("categories", "allMealsOfACategory");
  let mealsArr = mealsObj.meals;
  mealsArr.forEach((el) => {
    handleMealsCardGenerator(el);
  });
  // toggleIsACategorySelected();
}
function tempEnricher() {
  let categoriesObj = {
    categories: [
      {
        idCategory: "1",
        strCategory: "Beef",
        strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
        strCategoryDescription:
          "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
      },
      {
        idCategory: "2",
        strCategory: "Chicken",
        strCategoryThumb:
          "https://www.themealdb.com/images/category/chicken.png",
        strCategoryDescription:
          "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
      },
      {
        idCategory: "3",
        strCategory: "Dessert",
        strCategoryThumb:
          "https://www.themealdb.com/images/category/dessert.png",
        strCategoryDescription:
          "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
      },
      {
        idCategory: "4",
        strCategory: "Lamb",
        strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
        strCategoryDescription:
          "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n",
      },
      {
        idCategory: "5",
        strCategory: "Miscellaneous",
        strCategoryThumb:
          "https://www.themealdb.com/images/category/miscellaneous.png",
        strCategoryDescription:
          "General foods that don't fit into another category",
      },
      {
        idCategory: "6",
        strCategory: "Pasta",
        strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
        strCategoryDescription:
          "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).",
      },
      {
        idCategory: "7",
        strCategory: "Pork",
        strCategoryThumb: "https://www.themealdb.com/images/category/pork.png",
        strCategoryDescription:
          "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.",
      },
      {
        idCategory: "8",
        strCategory: "Seafood",
        strCategoryThumb:
          "https://www.themealdb.com/images/category/seafood.png",
        strCategoryDescription:
          'Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term "seafood" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.',
      },
      {
        idCategory: "9",
        strCategory: "Side",
        strCategoryThumb: "https://www.themealdb.com/images/category/side.png",
        strCategoryDescription:
          "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).",
      },
      {
        idCategory: "10",
        strCategory: "Starter",
        strCategoryThumb:
          "https://www.themealdb.com/images/category/starter.png",
        strCategoryDescription:
          "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal.\r\n\r\nHistorically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries. It formed a part of the “first service” of the meal, which consisted of potage, hors d’œuvre, and entrée (including the bouilli and relevé). The “second service” consisted of roast (rôti), salad, and entremets (the entremets sometimes being separated into a “third service” of their own). The final service consisted only of dessert.[3]:3–11 :13–25",
      },
      {
        idCategory: "11",
        strCategory: "Vegan",
        strCategoryThumb: "https://www.themealdb.com/images/category/vegan.png",
        strCategoryDescription:
          "Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable.",
      },
      {
        idCategory: "12",
        strCategory: "Vegetarian",
        strCategoryThumb:
          "https://www.themealdb.com/images/category/vegetarian.png",
        strCategoryDescription:
          "Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.\r\n\r\nVegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.",
      },
      {
        idCategory: "13",
        strCategory: "Breakfast",
        strCategoryThumb:
          "https://www.themealdb.com/images/category/breakfast.png",
        strCategoryDescription:
          'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.',
      },
      {
        idCategory: "14",
        strCategory: "Goat",
        strCategoryThumb: "https://www.themealdb.com/images/category/goat.png",
        strCategoryDescription:
          "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.",
      },
    ],
  };
  enrichCategoriesDataIntoSite(categoriesObj);
}
// tempEnricher();
function enrichCategoriesDataIntoSite(categoriesObj) {
  console.log(categoriesObj);
  let categoriesArr = categoriesObj.categories;
  if (categoriesArr.length) {
    categoriesArr.forEach((e) => {
      handleCategoryCardGeneration(e);
    });
    nodeElements.categoryCard = document.querySelectorAll(".category-card");
    eventListenerDynamicallyAddedToCategoryCard();
  } else {
    throw new Error("categories is empty");
  }
}
function showErrorPage() {
  nodeElements.errorSection.classList.add("error");
  nodeElements.errorSection.classList.remove("hidden");
}

function handleCategoryCardGeneration(obj) {
  nodeElements.categoryParentCardHolder.innerHTML += ` <div class="category-card">
  <img src="${obj.strCategoryThumb}" alt="" class="category-recipie-image" />
  <p class="name">${obj.strCategory}</p>
  <p class="desc">${obj.strCategoryDescription}</p>
</div>`;
}
function handleScreenChange(fromScreen, toScreen) {
  if (fromScreen == "categories" && toScreen == "allMealsOfACategory") {
    clearCategoriesScreen();
    hideCategoryScreen();
    showAllMealsOfACategoryScreen();
  } else {
  }
}
function hideCategoryScreen() {
  nodeElements.categoryParentCardHolder.classList.add("hidden");
}

function showAllMealsOfACategoryScreen() {
  nodeElements.allMealsOfACategory.classList.remove("hidden");
}

function handleClickOnCategoryCardAndReturnCategoryName(e) {
  if (e.target.tagName == "IMG") {
    return e.target.parentElement.querySelector("p.name").innerText;
  } else if (e.target.tagName == "P") {
    if (e.target.classList.contains("name")) {
      return e.target.innerText;
    } else if (e.target.classList.contains("desc")) {
      return e.target.parentElement.querySelector("p.name").innerText;
    }
  } else if (e.target.tagName == "DIV") {
    return e.target.querySelector("p.name").innerText;
  } else {
    console.log(
      "none of the above deal with this element in the handle click on category card and return category name function"
    );
  }
}

function tempEnricherOfMealsFromACategory() {
  let mealsObj = {
    meals: [
      {
        strMeal: "Algerian Kefta (Meatballs)",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/8rfd4q1764112993.jpg",
        idMeal: "53281",
        strArea: "Algerian",
        strCountry: "Algeria",
      },
      {
        strMeal: "Arepa Pabellón",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/13fg4j1764441982.jpg",
        idMeal: "53334",
        strArea: "Venezuela",
        strCountry: "Venezuela",
      },
      {
        strMeal: "Arepa pelua",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/jgl9qq1764437635.jpg",
        idMeal: "53329",
        strArea: "Venezuela",
        strCountry: "Venezuela",
      },
      {
        strMeal: "Asado",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/kgfh3q1763075438.jpg",
        idMeal: "53133",
        strArea: "Argentina",
        strCountry: "Argentina",
      },
      {
        strMeal: "Aussie Burgers",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/44bzep1761848278.jpg",
        idMeal: "53099",
        strArea: "Australian",
        strCountry: "Australia",
      },
      {
        strMeal: "Beef and Broccoli Stir-Fry",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/m0p0j81765568742.jpg",
        idMeal: "53366",
        strArea: "Chinese",
        strCountry: "China",
      },
      {
        strMeal: "Beef and Mustard Pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
        idMeal: "52874",
        strArea: "British",
        strCountry: "United Kingdom",
      },
      {
        strMeal: "Beef and Oyster pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
        idMeal: "52878",
        strArea: "British",
        strCountry: "United Kingdom",
      },
      {
        strMeal: "Beef Asado",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
        idMeal: "53071",
        strArea: "Filipino",
        strCountry: "Philippines",
      },
      {
        strMeal:
          "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
        idMeal: "52997",
        strArea: "Vietnamese",
        strCountry: "Vietnam",
      },
      {
        strMeal: "Beef Bourguignon",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
        idMeal: "52904",
        strArea: "France",
        strCountry: "France",
      },
      {
        strMeal: "Beef Brisket Pot Roast",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
        idMeal: "52812",
        strArea: "United States",
        strCountry: "United States",
      },
      {
        strMeal: "Beef Caldereta",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/41cxjh1683207682.jpg",
        idMeal: "53070",
        strArea: "Filipino",
        strCountry: "Philippines",
      },
      {
        strMeal: "Beef Dumpling Stew",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg",
        idMeal: "52873",
        strArea: "British",
        strCountry: "United Kingdom",
      },
      {
        strMeal: "Beef Empanadas",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/dxpc7j1764370714.jpg",
        idMeal: "53317",
        strArea: "Uruguayan",
        strCountry: "Uruguay",
      },
      {
        strMeal: "Beef Lo Mein",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1529444830.jpg",
        idMeal: "52952",
        strArea: "Chinese",
        strCountry: "China",
      },
      {
        strMeal: "Beef Mandi",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1nalo51765188375.jpg",
        idMeal: "53359",
        strArea: "India",
        strCountry: "India",
      },
      {
        strMeal: "Beef Mechado",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/cgl60b1683206581.jpg",
        idMeal: "53068",
        strArea: "Filipino",
        strCountry: "Philippines",
      },
      {
        strMeal: "Beef pho",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/pbzcrx1763765096.jpg",
        idMeal: "53238",
        strArea: "Vietnamese",
        strCountry: "Vietnam",
      },
      {
        strMeal: "Beef Rendang",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg",
        idMeal: "53053",
        strArea: "Malaysian",
        strCountry: "Malaysia",
      },
      {
        strMeal: "Beef stroganoff",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
        idMeal: "52834",
        strArea: "Russian",
        strCountry: "Russia",
      },
      {
        strMeal: "Beef Sunday Roast",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg",
        idMeal: "52824",
        strArea: "British",
        strCountry: "United Kingdom",
      },
      {
        strMeal: "Beef Wellington",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
        idMeal: "52803",
        strArea: "British",
        strCountry: "United Kingdom",
      },
      {
        strMeal: "Big Mac",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
        idMeal: "53013",
        strArea: "United States",
        strCountry: "United States",
      },
      {
        strMeal: "Bigos (Polish hunter's stew)",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/fl4brj1764361323.jpg",
        idMeal: "53300",
        strArea: "Polish",
        strCountry: "Poland",
      },
      {
        strMeal: "Bistek",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/4pqimk1683207418.jpg",
        idMeal: "53069",
        strArea: "Filipino",
        strCountry: "Philippines",
      },
      {
        strMeal: "Bitterballen (Dutch meatballs)",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/lhqev81565090111.jpg",
        idMeal: "52979",
        strArea: "Netherlands",
        strCountry: "Netherlands",
      },
      {
        strMeal: "Borsch",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/804v1j1764367088.jpg",
        idMeal: "53311",
        strArea: "Ukrainian",
        strCountry: "Ukraine",
      },
      {
        strMeal: "Braised Beef Chilli",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
        idMeal: "52826",
        strArea: "Mexican",
        strCountry: "Mexico",
      },
      {
        strMeal: "Brun Lapskaus (Norwegian Beef Vegetable Stew)",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/6vi2cv1763075785.jpg",
        idMeal: "53126",
        strArea: "Norway",
        strCountry: "Norway",
      },
      {
        strMeal: "Carbonada Criolla",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/8b2msz1763074897.jpg",
        idMeal: "53141",
        strArea: "Argentina",
        strCountry: "Argentina",
      },
      {
        strMeal: "Cevapi Sausages",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/vc08jn1628769553.jpg",
        idMeal: "53055",
        strArea: "Croatian",
        strCountry: "Croatia",
      },
      {
        strMeal: "Chivito sandwich",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/j80gmw1764372176.jpg",
        idMeal: "53319",
        strArea: "Uruguayan",
        strCountry: "Uruguay",
      },
      {
        strMeal: "Chivito uruguayo",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg",
        idMeal: "53063",
        strArea: "Uruguayan",
        strCountry: "Uruguay",
      },
      {
        strMeal: "Classic Tourtière",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/0sd7ac1764787957.jpg",
        idMeal: "53343",
        strArea: "Canadian",
        strCountry: "Canada",
      },
      {
        strMeal: "Corned Beef and Cabbage",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg",
        idMeal: "52998",
        strArea: "Irish",
        strCountry: "Ireland",
      },
      {
        strMeal: "Corned Beef and Cabbage – Jamaican Style",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/kdz63q1764793442.jpg",
        idMeal: "53350",
        strArea: "Jamaican",
        strCountry: "Jamaica",
      },
      {
        strMeal: "Corned Beef Hash",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/vz94r81760534692.jpg",
        idMeal: "53096",
        strArea: "British",
        strCountry: "United Kingdom",
      },
      {
        strMeal: "Croatian Bean Stew",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg",
        idMeal: "53058",
        strArea: "Croatian",
        strCountry: "Croatia",
      },
      {
        strMeal: "Croatian lamb peka",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
        idMeal: "53056",
        strArea: "Croatian",
        strCountry: "Croatia",
      },
      {
        strMeal: "Cumberland Pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/pvfkz61761595976.jpg",
        idMeal: "53098",
        strArea: "British",
        strCountry: "United Kingdom",
      },
      {
        strMeal: "Drunken noodles (pad kee mao)",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/2wx8cm1763373419.jpg",
        idMeal: "53193",
        strArea: "Thai",
        strCountry: "Thailand",
      },
      {
        strMeal: "Egyptian Fatteh",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/rlwcc51598734603.jpg",
        idMeal: "53031",
        strArea: "Egyptian",
        strCountry: "Egypt",
      },
      {
        strMeal: "Empanadas",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/q99te31763075494.jpg",
        idMeal: "53134",
        strArea: "Argentina",
        strCountry: "Argentina",
      },
      {
        strMeal: "Golabki (cabbage roll)",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg",
        idMeal: "53021",
        strArea: "Polish",
        strCountry: "Poland",
      },
      {
        strMeal: "Irish stew",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg",
        idMeal: "52781",
        strArea: "Irish",
        strCountry: "Ireland",
      },
      {
        strMeal: "Jamaican Beef Patties",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg",
        idMeal: "52938",
        strArea: "Jamaican",
        strCountry: "Jamaica",
      },
      {
        strMeal: "Jiggs Dinner",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/z1tfnw1764443171.jpg",
        idMeal: "53335",
        strArea: "Canadian",
        strCountry: "Canada",
      },
      {
        strMeal: "Karbonader (Lean Beef Patties) with Caramelized Onions",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/0bpjb11763075817.jpg",
        idMeal: "53125",
        strArea: "Norway",
        strCountry: "Norway",
      },
      {
        strMeal: "Kenyan Beef Curry",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/lqampv1762325397.jpg",
        idMeal: "53112",
        strArea: "Kenyan",
        strCountry: "Kenya",
      },
      {
        strMeal: "Lemongrass beef stew with noodles",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ntafxw1763586291.jpg",
        idMeal: "53211",
        strArea: "Thai",
        strCountry: "Thailand",
      },
      {
        strMeal: "Ma Po Tofu",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1525874812.jpg",
        idMeal: "52947",
        strArea: "Chinese",
        strCountry: "China",
      },
      {
        strMeal: "Massaman Beef curry",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg",
        idMeal: "52827",
        strArea: "Thai",
        strCountry: "Thailand",
      },
      {
        strMeal: "Matambre a la Pizza",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wf49qs1763075222.jpg",
        idMeal: "53140",
        strArea: "Argentina",
        strCountry: "Argentina",
      },
      {
        strMeal: "Milanesa",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wdfa171763065079.jpg",
        idMeal: "53135",
        strArea: "Argentina",
        strCountry: "Argentina",
      },
      {
        strMeal: "Minced Beef Pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg",
        idMeal: "52876",
        strArea: "British",
        strCountry: "United Kingdom",
      },
      {
        strMeal: "Mini chilli beef pies",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/6sarfo1762340107.jpg",
        idMeal: "53109",
        strArea: "Australian",
        strCountry: "Australia",
      },
      {
        strMeal: "Montreal Smoked Meat",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
        idMeal: "52927",
        strArea: "Canadian",
        strCountry: "Canada",
      },
      {
        strMeal: "Moussaka",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg",
        idMeal: "53006",
        strArea: "Greek",
        strCountry: "Greece",
      },
      {
        strMeal: "Mulukhiyah",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg",
        idMeal: "53029",
        strArea: "Egyptian",
        strCountry: "Egypt",
      },
      {
        strMeal: "Oxtail with broad beans",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1520083578.jpg",
        idMeal: "52943",
        strArea: "Jamaican",
        strCountry: "Jamaica",
      },
      {
        strMeal: "Paszteciki (Polish Pasties)",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/c9a3l31593261890.jpg",
        idMeal: "53017",
        strArea: "Polish",
        strCountry: "Poland",
      },
      {
        strMeal: "Pate Chinois",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg",
        idMeal: "52930",
        strArea: "Canadian",
        strCountry: "Canada",
      },
      {
        strMeal: "Portuguese prego with green piri-piri",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ewcikl1614348364.jpg",
        idMeal: "53042",
        strArea: "Portuguese",
        strCountry: "Portugal",
      },
      {
        strMeal: "Red Peas Soup",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sqpqtp1515365614.jpg",
        idMeal: "52941",
        strArea: "Jamaican",
        strCountry: "Jamaica",
      },
      {
        strMeal: "Roti john",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/hx335q1619789561.jpg",
        idMeal: "53052",
        strArea: "Malaysian",
        strCountry: "Malaysia",
      },
      {
        strMeal: "Shawarma chuck roast wrap",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/swo87v1763595282.jpg",
        idMeal: "53217",
        strArea: "Saudi Arabian",
        strCountry: "Saudi Arabia",
      },
      {
        strMeal:
          "Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/o2wb6p1581005243.jpg",
        idMeal: "52992",
        strArea: "United States",
        strCountry: "United States",
      },
      {
        strMeal: "Spaghetti Bolognese",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
        idMeal: "52770",
        strArea: "Italian",
        strCountry: "Italy",
      },
      {
        strMeal: "Steak & Vietnamese noodle salad",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/st9shl1763755808.jpg",
        idMeal: "53229",
        strArea: "Vietnamese",
        strCountry: "Vietnam",
      },
      {
        strMeal: "Steak and Kidney Pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg",
        idMeal: "52881",
        strArea: "British",
        strCountry: "United Kingdom",
      },
      {
        strMeal: "Steak Diane",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg",
        idMeal: "52935",
        strArea: "France",
        strCountry: "France",
      },
      {
        strMeal: "Szechuan Beef",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1529443236.jpg",
        idMeal: "52950",
        strArea: "Chinese",
        strCountry: "China",
      },
      {
        strMeal: "Thai beef stir-fry",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/kyuxew1763479470.jpg",
        idMeal: "53199",
        strArea: "Thai",
        strCountry: "Thailand",
      },
      {
        strMeal: "Traditional Croatian Goulash",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/n1hcou1628770088.jpg",
        idMeal: "53057",
        strArea: "Croatian",
        strCountry: "Croatia",
      },
      {
        strMeal: "Turkish lahmacun",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/tqd3ac1763786065.jpg",
        idMeal: "53251",
        strArea: "Vietnamese",
        strCountry: "Vietnam",
      },
      {
        strMeal: "Vegetable Shepherds Pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg",
        idMeal: "53000",
        strArea: "Irish",
        strCountry: "Ireland",
      },
      {
        strMeal: "Venezuelan Sancocho",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/8859m71764377470.jpg",
        idMeal: "53326",
        strArea: "Venezuela",
        strCountry: "Venezuela",
      },
      {
        strMeal: "Venezuelan Shredded Beef",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/mq27gf1764436795.jpg",
        idMeal: "53328",
        strArea: "Venezuela",
        strCountry: "Venezuela",
      },
    ],
  };
  enrichAllMealsFromACategoryDataIntoSite(mealsObj);
}

function handleMealsCardGenerator(obj) {
  nodeElements.allMealsOfACategory.innerHTML += ` <div class="category-card" id="${obj.idMeal}">
    <img src="${obj.strMealThumb}" alt="" class="category-recipie-image" />
    <p class="name">${obj.strMeal}</p>
    <p class="desc">${obj.strArea}</p>
  </div>`;
}

function clearCategoriesScreen() {
  nodeElements.categoryParentCardHolder.innerHTML = "";
}

function toggleIsACategorySelected() {
  db.isACategorySelected = !db.isACategorySelected;
  return db.isACategorySelected;
}
function showModal() {
  nodeElements.modal.classList.remove("hidden");
}
function hideModal() {
  nodeElements.modal.classList.add("hidden");
}

function enrichModal(singleMealObj) {
  let meal = singleMealObj.meals[0];
  nodeElements.modal.innerHTML = ` <div id="modalBody">
<img src="${meal.strMealThumb}" alt="" />
<p>${meal.strMeal}</p>
<p>Instructions: <br>
${meal.strInstructions}
</p>
<a target="_blank" href="${meal.strYoutube}"></a>
<button id="closeModal">Close</button>
</div>`;
}

function eventListenerDynamicallyAddedToCategoryCard() {
  nodeElements.categoryCard.forEach((card) => {
    card.addEventListener("click", (e) => {
      let category = handleClickOnCategoryCardAndReturnCategoryName(e);
      let mealsObj = fetchAllMealsOfACategory(category);
      // enrichAllMealsFromACategoryDataIntoSite(mealsObj);
      // tempEnricherOfMealsFromACategory();
    });
  });
}

nodeElements.allMealsOfACategory.addEventListener("click", (e) => {
  let idOfTheMeal = takeEventTargetReturnMealId(e);
  fetch(`${links.singleMeal}${idOfTheMeal}`)
    .then((res) => res.json())
    .then((data) => {
      enrichModal(data);
      showModal();
    })
    .catch((err) => {
      showErrorPage();
      console.log(err);
    });

  // enrichASingleMealInfoIntoModal()
});
nodeElements.modal.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON" || e.target.classList.contains("modal")) {
    hideModal();
  }
});

document.addEventListener("click", (e) => {
  console.log(e.target);
});

function takeEventTargetReturnMealId(e) {
  if (e.target.tagName == "IMG" || e.target.tagName == "P") {
    return e.target.parentElement.id;
  } else if (
    e.target.tagName == "DIV" &&
    e.target.classList.contains("category-card")
  ) {
    return e.target.id;
  } else {
    console.log(
      "failed to recover id from the markup event triggered by unknown element"
    );
  }
}
