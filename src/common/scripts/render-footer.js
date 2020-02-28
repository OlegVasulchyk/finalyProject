const renderFooter = () => {
  const body = document.querySelector("body");
  const template = ` <footer class="main-footer">
  <ul class="social">
    <li class="social__item">
      <a href="https://www.pinterest.com" class="social__link"
        ><i class="fab fa-pinterest-p"></i
      ></a>
    </li>
    <li class="social__item">
      <a href="https://uk-ua.facebook.com" class="social__link"
        ><i class="fab fa-facebook-f"></i
      ></a>
    </li>
    <li class="social__item">
      <a href="https://twitter.com" class="social__link"
        ><i class="fab fa-twitter"></i
      ></a>
    </li>
    <li class="social__item">
      <a href="https://www.instagram.com/" class="social__link"
        ><i class="fab fa-instagram"></i
      ></a>
    </li>
  </ul>
  © 2023 by The Art of Food. Proudly created with
  <a href="#" class="main-footer__link">Wix.com</a>
</footer>`;

  body.insertAdjacentHTML("beforeEnd", template);
};

export { renderFooter };
