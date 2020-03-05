function isVisible(elem) {
  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let topVisible = coords.top > 0 && coords.top < windowHeight;

  // нижний край элемента виден?
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function showVisible() {
  for (let parallax of document.querySelectorAll(".parallax-mobile")) {
    if (isVisible(parallax)) {
      parallax.classList.add("parallax-mobile--visible");
      parallax.classList.remove("parallax-mobile");
    }
  }
}

export { showVisible };
