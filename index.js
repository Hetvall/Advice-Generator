const apiLink = "https://api.adviceslip.com/advice";
const adviceID = document.querySelector(".advice-id");
const adviceQuote = document.querySelector(".advice-quote");
const button = document.querySelector(".submit-button");

const getRandomAdvise = async () => {
  try {
    const response = await fetch(apiLink);
    const data = await response.json();
    const id = data.slip.id;
    const advice = data.slip.advice;
    return { id, advice };
  } catch (error) {
    return error;
  }
};

button.addEventListener("click", async () => {
  const { id, advice } = await getRandomAdvise();
  adviceQuote.textContent = `“${advice}”`;
  adviceID.textContent = `ADVICE # ${id}`;
});
