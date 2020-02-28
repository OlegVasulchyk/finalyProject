const renderMain = () => {
  const body = document.querySelector("body");
  const navigation = document.body.children[1];

  const template = `    <main class="container">
  <div class="banner col-12 parallax-mobile">
    <h1 class="banner__title">THE ART OF FOOD</h1>
    <div class="banner__text">PHOTOGRAPHY</div>
    <a href="./portfolio.html" class="btn">View More</a>
  </div>
</main`;

  navigation.insertAdjacentHTML("afterEnd", template);
};

export { renderMain };
