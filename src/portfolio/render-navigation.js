const renderNavigation = () => {
  const body = document.querySelector("body");
  const header = document.body.children[0];

  const template = `  <nav class="navigation">
  <a href="#" id="top"></a>
<a href="#top" class="arrowTop fas fa-chevron-up"></a>
  <div class="navigation__container">
    <a href="./home.html" class="navigation__link">j.alissa</a>
    <button id="btn" class="navigation__menu-toggle">
      <span id="btnIcon" class="navigation__icon"></span>
    </button>
    <ul id="menu" class="navigation__menu menu">
      <li class="menu__item">
        <a href="./home.html" class="menu__link">home</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link active">portfolio</a>
      </li>
      <li class="menu__item">
        <a href="./about.html" class="menu__link">about</a>
      </li>
      <li class="menu__item">
        <a href="./books.html" class="menu__link">books</a>
      </li>
      <li class="menu__item">
        <a href="./contact.html" class="menu__link">contact</a>
      </li>
    </ul>
  </div>
  <button
    id="backdrop"
    href="#"
    class="navigation__backdrop"
    tabindex="-1"
  ></button>
</nav>`;

  header.insertAdjacentHTML("afterEnd", template);
};

export { renderNavigation };
