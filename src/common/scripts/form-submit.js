const form = document.querySelectorAll(".form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const btnForm = document.querySelector(".btn__form");
  const textValidate = document.createElement("span");
  textValidate.classList.add(".form__validate-text");
  textValidate.innerHTML = "Thanks for submitting!";

  btnForm.insertAdjacentHTML("afterEnd", textValidate);
});
