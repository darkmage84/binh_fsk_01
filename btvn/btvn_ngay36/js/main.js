import { client } from "./client.js";
import { config } from "./config.js";

// Khởi tạo các giá trị
let countDown = 3;

const quizzGame = document.querySelector(".quizz-game");

const startBTN = document.querySelector(".start-btn");
startBTN.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   console.log(startBTN);
  setInterval(() => {
    if (countDown) {
      startBTN.innerText = `${countDown--}`;
    } else {
      startBTN.innerText = `GO !!!`;
      startBTN.classList.add("d-none");
    }
    console.log(countDown);
  }, 1000);
});

const renderQuestions = (questions) => {
  const questionsEl = document.querySelector(".quizz-question");
  questionsEl.innerText = ``;
  //top
  if (questions.length) {
    questions.forEach(({ id, question }) => {});
  }
};

const getQuestions = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/questions?${queryString}`);
  renderQuestions(data);
};
