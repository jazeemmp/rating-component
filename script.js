const submit = document.querySelector(".submit-btn");
const rateSection = document.querySelector(".rate-section");
const thanksSection = document.querySelector(".thanks-section");
const rateButtons = document.querySelectorAll(".btn");
const userRate = document.getElementById("num");

rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rateButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

submit.addEventListener("click", () => {
  const rateActive = document.querySelector(".active");
  if (rateActive) {
    userRate.textContent = rateActive.value;
    rateSection.style.transform = "translateX(110%)";
    thanksSection.style.transform = "translateX(-110%)";
  } else {
      return;
  }
});
