const renderMain = () => {
  const body = document.querySelector("body");
  const navigation = document.body.children[1];

  const template = `<main class="about grid container parallax-mobile">
  <div class="about__image col-6 col-sm-12"></div>
  <div class="about__description-block col-6 col-sm-12">
    <h1 class="about__title">ABOUT JADE</h1>
    <p class="about__paragraph">
      I'm a paragraph. Click here to add your own text and edit me. It’s
      easy. Just click “Edit Text” or double click me to add your own
      content and make changes to the font. Feel free to drag and drop me
      anywhere you like on your page.
    </p>
    <p class="about__paragraph">
      This is a great space to write long text about your company and your
      services. You can use this space to go into a little more detail about
      your company.
    </p>

    <h2 class="about__title-secondary">education</h2>
    <p class="about__paragraph">
      I'm a paragraph. Click here to add your own text and edit me. It’s
      easy. Just click “Edit Text” or double click me to add your own
      content and make changes to the font.
    </p>

    <h2 class="about__title-secondary">Awards & Nominations:</h2>
    <p class="about__paragraph">
      I'm a paragraph. Click here to add your own text and edit me. Let your
      users get to know you.
    </p>
  </div>
</main>`;

  navigation.insertAdjacentHTML("afterEnd", template);
};

export { renderMain };
