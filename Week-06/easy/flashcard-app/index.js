let possibleScreens = { 0: "setup", 1: "quiz", 2: "result" };

let whatScreen = possibleScreens[0];
const setupScreenMainBtn = document.getElementById("mainBtn");
const setupScreenHowManyCardsTheUserWantsToPractiseCount =
  document.getElementById("setupScreenHowManyCardsTheUserWantsToPractiseCount");
const setupScreenPlusBtn = document.getElementById("plus");
const setupScreenMinusBtn = document.getElementById("minus");
const db = {
  previousScreen: "setup",
  currentScreen: "setup",
};
let topicDB = {
  isATopicSelected: false,
  topicName: "",
  selectedTopicName: "",
  setupScreenHowManyCardsTheUserWantsToPractiseCount: 5,
};

const screensNodeElement = {
  setup: document.getElementById("setupScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen"),
};

updateSetupScreenHowManyCardsTheUserWantsToPractiseCount();
//setup screen

const flashcards = [
  {
    topic: "Science",
    cards: [
      {
        question: "What planet is known as the Red Planet?",
        answer: "Mars",
      },
      {
        question: "What gas do plants absorb from the atmosphere?",
        answer: "Carbon Dioxide",
      },
      {
        question: "What is the boiling point of water at sea level?",
        answer: "100°C",
      },
      {
        question: "Which organ pumps blood throughout the human body?",
        answer: "Heart",
      },
      {
        question: "What force pulls objects toward Earth?",
        answer: "Gravity",
      },
      {
        question: "What is the center of an atom called?",
        answer: "Nucleus",
      },
      {
        question:
          "Which vitamin is mainly produced when sunlight hits the skin?",
        answer: "Vitamin D",
      },
      {
        question: "What is H2O commonly known as?",
        answer: "Water",
      },
    ],
  },

  {
    topic: "History",
    cards: [
      {
        question: "Who was the first President of the United States?",
        answer: "George Washington",
      },
      {
        question: "In which year did World War II end?",
        answer: "1945",
      },
      {
        question: "Which ancient civilization built the pyramids?",
        answer: "Egyptians",
      },
      {
        question: "Who discovered America in 1492?",
        answer: "Christopher Columbus",
      },
      {
        question:
          "What wall fell in 1989, symbolizing the end of the Cold War?",
        answer: "Berlin Wall",
      },
      {
        question: "Who was known as the Maid of Orleans?",
        answer: "Joan of Arc",
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        answer: "Roman Empire",
      },
      {
        question: "Who wrote the Declaration of Independence?",
        answer: "Thomas Jefferson",
      },
    ],
  },

  {
    topic: "Geography",
    cards: [
      {
        question: "What is the largest ocean on Earth?",
        answer: "Pacific Ocean",
      },
      {
        question: "Which country has the largest population?",
        answer: "India",
      },
      {
        question: "What is the capital of Japan?",
        answer: "Tokyo",
      },
      {
        question: "Which desert is the largest in the world?",
        answer: "Sahara Desert",
      },
      {
        question: "Mount Everest lies in which mountain range?",
        answer: "Himalayas",
      },
      {
        question: "Which river is the longest in the world?",
        answer: "Nile River",
      },
      {
        question: "What is the smallest continent?",
        answer: "Australia",
      },
      {
        question: "Which country is famous for the maple leaf symbol?",
        answer: "Canada",
      },
    ],
  },

  {
    topic: "Mathematics",
    cards: [
      {
        question: "What is 7 × 8?",
        answer: "56",
      },
      {
        question: "What is the square root of 81?",
        answer: "9",
      },
      {
        question: "What is the value of π rounded to two decimal places?",
        answer: "3.14",
      },
      {
        question: "What is 15% of 200?",
        answer: "30",
      },
      {
        question: "How many sides does a hexagon have?",
        answer: "6",
      },
      {
        question: "What is 12 squared?",
        answer: "144",
      },
      {
        question: "What is the formula for the area of a rectangle?",
        answer: "Length × Width",
      },
      {
        question: "What is 100 divided by 4?",
        answer: "25",
      },
    ],
  },

  {
    topic: "Technology",
    cards: [
      {
        question: "What does CPU stand for?",
        answer: "Central Processing Unit",
      },
      {
        question: "Which company created the iPhone?",
        answer: "Apple",
      },
      {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language",
      },
      {
        question: "Which programming language is mainly used for web styling?",
        answer: "CSS",
      },
      {
        question: "What does Wi-Fi allow devices to do?",
        answer: "Connect to the internet wirelessly",
      },
      {
        question: "Which company owns Android?",
        answer: "Google",
      },
      {
        question: "What is the brain of the computer called?",
        answer: "CPU",
      },
      {
        question: "What does USB stand for?",
        answer: "Universal Serial Bus",
      },
    ],
  },

  {
    topic: "Language",
    cards: [
      {
        question: "What is the opposite of 'happy'?",
        answer: "Sad",
      },
      {
        question: "How many vowels are there in English?",
        answer: "5",
      },
      {
        question: "What is a synonym for 'quick'?",
        answer: "Fast",
      },
      {
        question: "What punctuation mark ends a question?",
        answer: "Question Mark",
      },
      {
        question: "Which word is a noun: run, blue, or apple?",
        answer: "Apple",
      },
      {
        question: "What is the past tense of 'go'?",
        answer: "Went",
      },
      {
        question: "What do we call a word that describes a noun?",
        answer: "Adjective",
      },
      {
        question: "What is the plural of 'child'?",
        answer: "Children",
      },
    ],
  },
];

//enrichment
const allTopics = document.querySelectorAll(".subject-box");
function handleScreenChange(screenStr) {
  if (Object.values(possibleScreens).includes(screenStr)) {
    db.currentScreen = screenStr;
  }
  updateScreen();
}
function updateScreen() {
  let screen = db.currentScreen;
  let previousScreen = db.previousScreen;
  showScreen(screensNodeElement[screen]);
  hideScreen(screensNodeElement[previousScreen]);
}
function showScreen(screenNodeElement) {
  screenNodeElement.classList.remove("hidden");
}
function hideScreen(previousScreenNodeElement) {
  previousScreenNodeElement.classList.add("hidden");
}
function retreiveTopic(subjectBoxNodeElement) {
  let title = subjectBoxNodeElement.children[1].innerText.split(" ")[0];
  console.log(title);
  return title.substr(0, Number(title.length) - 2);
}
function takeTargetReturnSqNodeElement(currentNodeElement) {
  if (!currentNodeElement) {
    console.log(
      "Error: empty node element passed when required the subject box or any of the its children"
    );
    return "";
  }
  if (currentNodeElement.tagName == "SPAN") {
    if (currentNodeElement.classList.contains("icon")) {
      return currentNodeElement.parentElement;
    } else {
      return currentNodeElement.parentElement.parentElement;
    }
  } else if (currentNodeElement.tagName === "DIV") {
    if (currentNodeElement.classList.contains("subject-box")) {
      return currentNodeElement;
    }
    return currentNodeElement.parentElement;
  } else {
    return currentNodeElement;
  }
}
function selectSubject(subjectBoxNodeElement) {
  //styles gotta change
  subjectBoxNodeElement.classList.add("selected-subject");
}
function deSelectSubject(subjectBoxNodeElement) {
  subjectBoxNodeElement.classList.remove("selected-subject");
}
function subjectStringCleanerFunction(subjectName) {
  return subjectName.substr(0, subjectName.length - 8);
}
function checkIfATopicIsSelected() {
  if (topicDB.selectedTopicName) {
    return true;
  } else {
    return false;
  }
}
function checkIfTheCardsNumberHasBeenGivenInTheSetupScreen() {
  if (topicDB.setupScreenHowManyCardsTheUserWantsToPractiseCount) {
    return true;
  }
  return false;
}
function handleSetupScreenMainBtnClick() {
  //we will be checking if theres a topic selected
  if (
    checkIfATopicIsSelected() &&
    checkIfTheCardsNumberHasBeenGivenInTheSetupScreen()
  ) {
    //change the screen to quizzing
    handleScreenChange("quiz");
    renderQuizScreen();
  }
}
function handleSetupScreenBtnClick(whatBtnWasClicked) {
  if (topicDB.setupScreenHowManyCardsTheUserWantsToPractiseCount > 0) {
    if (whatBtnWasClicked == "minus") {
      topicDB.setupScreenHowManyCardsTheUserWantsToPractiseCount -= 1;
    } else if (whatBtnWasClicked == "plus") {
      topicDB.setupScreenHowManyCardsTheUserWantsToPractiseCount += 1;
    }
  } else {
    if (whatBtnWasClicked == "plus") {
      topicDB.setupScreenHowManyCardsTheUserWantsToPractiseCount += 1;
    }
  }
}
function updateSetupScreenHowManyCardsTheUserWantsToPractiseCount() {
  setupScreenHowManyCardsTheUserWantsToPractiseCount.innerText =
    topicDB.setupScreenHowManyCardsTheUserWantsToPractiseCount;
}

allTopics.forEach((el) => {
  el.addEventListener("click", (e) => {
    let sq = takeTargetReturnSqNodeElement(e.target);

    topicDB.topicName = subjectStringCleanerFunction(
      sq.querySelector("div").innerText
    );

    if (!topicDB.isATopicSelected) {
      selectSubject(sq);
      topicDB.selectedTopicName = topicDB.topicName;
      topicDB.isATopicSelected = true;
    } else if (topicDB.selectedTopicName == topicDB.topicName) {
      deSelectSubject(sq);
      topicDB.selectedTopicName = "";
      topicDB.isATopicSelected = false;
    }
  });
});

setupScreenMainBtn.addEventListener("click", () => {
  handleSetupScreenMainBtnClick();
});
setupScreenPlusBtn.addEventListener("click", () => {
  //plus has been clicked plus one

  handleSetupScreenBtnClick("plus");
  updateSetupScreenHowManyCardsTheUserWantsToPractiseCount();
});
setupScreenMinusBtn.addEventListener("click", () => {
  //plus has been clicked plus one
  handleSetupScreenBtnClick("minus");
  updateSetupScreenHowManyCardsTheUserWantsToPractiseCount();
});

// quizing screen

let quizDB = {
  cards: [],
  currentCardIndex: 0,
  totalCardCount: 0,
  gotCorrect: 0,
  gotWrong: 0,
  correctlyAnsweredIndices: [],
  incorrectlyAnsweredIndices: [],
};

let cardRevealed = false;

function updateTotalCardCount() {
  quizDB.totalCardCount =
    topicDB.setupScreenHowManyCardsTheUserWantsToPractiseCount;
}

const quizNodeElements = {
  reponseBtns: document.querySelector(".response-btns"),
  rightBtn: document.getElementById("rightBtn"),
  wrongBtn: document.getElementById("wrongBtn"),
  answerText: document.getElementById("answerTxt"),
  questonText: document.getElementById("questionTxt"),
  answer: document.getElementById("answer"),
  question: document.getElementById("question"),
  clickToReveal: document.getElementById("clickToReveal"),
  flipInstruction: document.getElementById("instruction"),
  topicTopName: document.getElementById("cardName"),
  currentCardCount: document.getElementById("currentCard"),
  totalCard: document.getElementById("totalCard"),
  card: document.getElementById("flipper"),
};

function getQuizQuestionsAndAnswers(subject) {
  let cards = flashcards
    .filter((el) => el.topic == subject)
    .map((e) => e.cards);
  return cards[0];
}
function updateCardCount() {
  quizNodeElements.currentCardCount.innerText = quizDB.currentCardIndex + 1;
  //we can capture the error from here as well btw
  quizNodeElements.totalCard.innerText = quizDB.totalCardCount;
}
function renderFlashCard(question, answer) {
  quizNodeElements.question.innerText = question;
  quizNodeElements.answer.innerText = answer;
}
function renderQuizScreen() {
  handleTopicTopName(topicDB.selectedTopicName);
  quizDB.cards = getQuizQuestionsAndAnswers(topicDB.selectedTopicName);
  updateTotalCardCount();
  updateCardCount();
  //statically calling the first flash card thats it, now everything gotta be handled by the next and previous button
  let { question, answer } = quizDB.cards[quizDB.currentCardIndex];
  renderFlashCard(question, answer);
}
function handleTopicTopName(topicStr) {
  quizNodeElements.topicTopName.innerText = topicStr;
}
function showReponseBtns() {
  quizNodeElements.reponseBtns.style.display = "grid";
}
function hideReponseBtns() {
  quizNodeElements.reponseBtns.style.display = "none";
}
handleReponseBtns();
function handleReponseBtns() {
  if (cardRevealed) {
    showReponseBtns();
  } else {
    hideReponseBtns();
  }
}

function checkIfAllFlashcardsAreDone() {
  if (Number(quizDB.currentCardIndex) + 1 > quizDB.totalCardCount) {
    return true;
  }
  return false;
}
function resetCard() {
  //reflipp the thingy
  quizNodeElements.card.classList.remove("flipped");
  cardRevealed = false;
  handleReponseBtns();
}

function handleNextCard() {
  quizDB.currentCardIndex += 1;
  if (!checkIfAllFlashcardsAreDone()) {
    console.log(checkIfAllFlashcardsAreDone());
    let { question, answer } = quizDB.cards[quizDB.currentCardIndex];
    resetCard();
    updateCardCount();
    setTimeout(() => {
      renderFlashCard(question, answer);
    }, 400);
  } else {
    db.previousScreen = "quiz";
    handleScreenChange("result");
    renderResultScreen();
  }
}
quizNodeElements.card.addEventListener("click", () => {
  quizNodeElements.card.classList.toggle("flipped");

  cardRevealed = !cardRevealed;
  // console.log(`is card revealed: ${cardRevealed}`);
  handleReponseBtns();
});
quizNodeElements.rightBtn.addEventListener("click", () => {
  quizDB.gotCorrect += 1;

  quizDB.correctlyAnsweredIndices.push(quizDB.currentCardIndex);
  // console.log(quizDB);
  // go to next card
  handleNextCard();
});
quizNodeElements.wrongBtn.addEventListener("click", () => {
  quizDB.gotWrong += 1;
  quizDB.incorrectlyAnsweredIndices.push(quizDB.currentCardIndex);

  // console.log(quizDB);

  //go to next card
  handleNextCard();
});

//result screen

const resultScreenNodeElements = {
  score: document.getElementById("percentScored"),
  remarks: document.getElementById("remarks"),
  detailedRemarks: document.getElementById("detailedRemarks"),
  resultTotalQuestions: document.getElementById("resultTotalQuestions"),
  resultCorrectScore: document.getElementById("resultCorrectScore"),
  resultIncorrectScore: document.getElementById("resultIncorrectScore"),
  cardReviewParent: document.getElementById("cardReviewParent"),
  progressBarFill: document.getElementById("circularBar"),
  newTopicBtn: document.getElementById("newTopicBtn"),
  tryAgainBtn: document.getElementById("tryAgainBtn"),
};
let resultScreenStyleElements = {
  tick: "✓",
  cross: "✗",
};
const resultDB = {
  percentage: 0,
};
const remarks = [
  [
    0,
    39,
    "Keep practising!",
    "Every mistake is a lesson. Review and try again.",
  ],
  [
    40,
    69,
    "Good effort!",
    "You're making progress — a few more rounds will help.",
  ],
  [70, 89, "Well done!", "You have a solid grasp of the material."],
  [
    90,
    100,
    "Outstanding!",
    "You've truly mastered this topic. Excellent work.",
  ],
];

function getAndSetScorePercentage() {
  let correctlyAnswered = quizDB.gotCorrect;
  let totalCardCount = quizDB.totalCardCount;

  resultDB.percentage = (correctlyAnswered / totalCardCount) * 100;

  resultScreenNodeElements.score.innerText =
    Math.trunc(resultDB.percentage) + "%";
}

function getAndSetRemarksAndDetailedRemarks() {
  //check what is our score
  let { remark, detailedRemark } = returnsRemarkAndDetailedRemarks(
    resultDB.percentage
  );

  //setting them now
  resultScreenNodeElements.remarks.innerText = remark;
  resultScreenNodeElements.detailedRemarks.innerText = detailedRemark;
}

function getAndSetLiteralCorrectIncorrectResponseReport() {
  resultScreenNodeElements.resultTotalQuestions.innerText =
    quizDB.totalCardCount;
  resultScreenNodeElements.resultCorrectScore.innerText = quizDB.gotCorrect;
  resultScreenNodeElements.resultIncorrectScore.innerText = quizDB.gotWrong;
}

function returnsRemarkAndDetailedRemarks(percentage) {
  let arr = remarks.filter((e) => {
    if (percentage >= e[0] && percentage <= e[1]) {
      return e;
    }
  });
  let remark = arr[0][2];
  let detailedRemark = arr[0][3];
  return { remark, detailedRemark };
}
function getAndSetQuestionReview() {
  // [{gotCorrect:true,question,answer}]
  let finalReviewDataArr = [];
  let gotCorrect;
  for (let index = 0; index < quizDB.totalCardCount; index++) {
    if (
      quizDB.correctlyAnsweredIndices.includes(index) ||
      quizDB.incorrectlyAnsweredIndices.includes(index)
    ) {
      if (quizDB.correctlyAnsweredIndices.includes(index)) {
        gotCorrect = true;
      } else {
        gotCorrect = false;
      }
      finalReviewDataArr.push({
        gotCorrect: gotCorrect,
        question: quizDB.cards[index].question,
        answer: quizDB.cards[index].answer,
      });
    }
  }

  finalReviewDataArr.forEach((el) => {
    resultScreenNodeElements.cardReviewParent.innerHTML += `<div>
    <span>${
      el.gotCorrect
        ? resultScreenStyleElements.tick
        : resultScreenStyleElements.cross
    }</span>
    <div>
    <p>${el.question}</p>
    <p class="dim">${el.answer}</p>
    </div>
  </div>`;
  });
}
function renderResultScreen() {
  //need the score,
  getAndSetScorePercentage();
  handleResultScreenProgressBar();
  //get the remarks and the detailed remarks on the screen
  getAndSetRemarksAndDetailedRemarks();
  //edit the thing where it says how many you got right and how many you got wrong
  getAndSetLiteralCorrectIncorrectResponseReport();
  //add to the div which is supposed to hold these review thingy
  getAndSetQuestionReview();
}

function handleResultScreenProgressBar() {
  let barFillingDegree = Math.trunc((resultDB.percentage / 100) * 360);

  const style = document.createElement("style");

  style.textContent = `
  .dynamic-progress {
    background-image: conic-gradient(
      #e0bc6e ${barFillingDegree}deg,
      #232220 0deg
    );
  }
`;

  document.head.appendChild(style);
  resultScreenNodeElements.progressBarFill.classList.add("dynamic-progress");
}

resultScreenNodeElements.newTopicBtn.addEventListener("click", () => {
  //handle screen change
  location.reload();
});

resultScreenNodeElements.tryAgainBtn.addEventListener("click", () => {
  //handle screen change with this same context
  console.log("hi");
  db.previousScreen = "result";
  handleScreenChange("quiz");
  let temp = { cards: quizDB.cards, totalCardCount: quizDB.totalCardCount };
  clearTheCurrentQuizDB();
  quizDB.cards = temp.cards;
  quizDB.totalCardCount = temp.totalCardCount;
  finalReviewDataArr = [];
  resultScreenNodeElements.cardReviewParent.innerHTML = "";
  renderQuizScreen();
});
function clearTheCurrentQuizDB() {
  quizDB = {
    cards: [],
    currentCardIndex: 0,
    totalCardCount: 0,
    gotCorrect: 0,
    gotWrong: 0,
    correctlyAnsweredIndices: [],
    incorrectlyAnsweredIndices: [],
  };
  resetCard();
  cardRevealed = false;
}
