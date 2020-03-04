const renderHeader = () => {
  const body = document.querySelector("body");
  const template = `
  <header class="page-header page-header--border">
<a href="#" class="header header__link">
  <span class="header__text"
    >This site was designed with the <span class="logo-wix">WIX</span>.com
    website builder. Great your website today.
  </span>
  <button class="btn-wix btn-wix--premium">start now</button>
</a>
</header>`;

  body.insertAdjacentHTML("afterBegin", template);
};

export { renderHeader };
