const renderMain = () => {
  const body = document.querySelector("body");
  const navigation = document.body.children[1];

  const template = `<main class="main container">
  <h1 class="first-title parallax-mobile">portfolio</h1>
  <ul class=" portfolio-list grid">
    <li class=" item-portfolio col-4 col-sm-12 parallax-mobile">
      <div class="item-portfolio__background item-portfolio__background--1">
        <h2 class="item-portfolio__title">editorial</h2>
        <a href="./home.html" class="btn">View</a>
      </div>
    </li>
    <li class="item-portfolio col-4 col-sm-12 parallax-mobile">
      <div class="item-portfolio__background item-portfolio__background--2">
        <h2 class="item-portfolio__title">FOOD & SERVE</h2>
        <a href="./home.html" class="btn">View</a>
      </div>
    </li>
    <li class="item-portfolio col-4 col-sm-12 parallax-mobile">
      <div class="item-portfolio__background item-portfolio__background--3">
        <h2 class="item-portfolio__title">BAKED GOODS</h2>
        <a href="./home.html" class="btn">View</a>
      </div>
    </li>
  </ul>
</main>`;

  navigation.insertAdjacentHTML("afterEnd", template);
};

export { renderMain };
