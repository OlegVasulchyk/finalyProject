const renderMain = () => {
  const body = document.querySelector("body");
  const navigation = document.body.children[1];

  const template = `<main class="books container">
  <h1 class="first-title parallax-mobile">books</h1>
  <ul class="books__list grid">
    <li class="books__item books-item grid col-12 parallax-mobile">
      <div class="books-item__features col-6 col-lg-12">
        <div class="books-item__wrapper">
          <h2 class="books-item__title">BREAKFASTS</h2>
          <p class="books-item__paragraph">
            I'm a paragraph. Click here to add your own text and edit me.
            It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font.
          </p>
          <div class="books-item__price-block">
            <span class="books-item__price">40<span>$</span></span
            ><a href="#" class="btn btn--black">Buy Now</a>
          </div>
        </div>
      </div>
      <div
        class="books-item__image books-item__image--1 col-6 col-lg-12"
      ></div>
    </li>
    <li class="paralax books__item books-item grid col-12 parallax-mobile">
      <div class="books-item__features col-6 col-lg-12">
        <div class="books-item__wrapper">
          <h2 class="books-item__title">SUGAR & SPICE</h2>
          <p class="books-item__paragraph">
            I'm a paragraph. Click here to add your own text and edit me.
            It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font.
          </p>
          <div class="books-item__price-block">
            <span class="books-item__price">34<span>$</span></span>
            <a href="#" class="btn btn--black">Buy Now</a>
          </div>
        </div>
      </div>
      <div
        class="books-item__image books-item__image--2 col-6 col-lg-12"
      ></div>
    </li>
    <li class="books__item books-item grid col-12 parallax-mobile">
      <div class="books-item__features col-6 col-lg-12">
        <div class="books-item__wrapper">
          <h2 class="books-item__title">HOLIDAY SEASON SPECIALS</h2>
          <p class="books-item__paragraph">
            I'm a paragraph. Click here to add your own text and edit me.
            It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font.
          </p>
          <div class="books-item__price-block">
            <span class="books-item__price">25<span>$</span></span
            ><a href="#" class="btn btn--black">Buy Now</a>
          </div>
        </div>
      </div>
      <div
        class="books-item__image books-item__image--3 col-6 col-lg-12"
      ></div>
    </li>
  </ul>
</main>`;

  navigation.insertAdjacentHTML("afterEnd", template);
};

export { renderMain };
