const renderMain = () => {
  const body = document.querySelector("body");
  const navigation = document.body.children[1];

  const template = ` <main class="contact container grid parallax-mobile">
  <div class="contact__image-block col-6 col-xs-12"></div>
  <div class="contact__form-block col-6 col-xs-12">
    <div class="contact__inner">
      <h1 class="first-title">GET IN TOUCH</h1>
      <p class="contact__paragraph contact__information">
        I'm a paragraph. Click here to add your own text and edit me. I’m a
        great place for you to tell a story and let your users know a little
        more about you.
      </p>
      <div class="contact__text">
        Tel: 123-456-7890 | Email: info@mysite.com
      </div>

      <form action="" class="form">
        <div class="form__group">
          <label for="name" class="form__label">Enter Your Name</label>
          <input
            placeholder="Name"
            type="text"
            class="form__input"
            id="name"
            required
          />
        </div>
        <div class="form__group">
          <label for="email" class="form__label">Enter Your Email</label>
          <input
            placeholder="Email"
            type="email"
            class="form__input"
            id="email"
            required
          />
        </div>
        <div class="form__group">
          <label for="subject " class="form__label"
            >Enter Your Subject</label
          >
          <input
            placeholder="Subject"
            type="text"
            class="form__input"
            id="subject"
            required
          />
        </div>
        <div class="form__group form__group--textarea">
          <label for="message" class="form__label">
            Enter Your Message Here</label
          >
          <textarea
            placeholder="Message"
            class="form__input form__input--textarea"
            id="message"
            required
          ></textarea>
        </div>
        <div class="form__group form__group--btn">
          <input type="submit" class="btn btn__form" value="Submit" />
        </div>
      </form>
      <form action="" class="form form-subscribe">
        <h2 class="form-subscribe__title">
          Stay Up-To-Date with New Posts
        </h2>
        <div class="form__group">
          <label for="subscribe" class="form__label"
            >Enter your email here</label
          >
          <input
            placeholder="Email"
            type="email"
            class="form__input form__input--subscribe"
            id="subscribe"
            required
          />
          <input
            type="submit"
            class="btn btn__form btn__form--small"
            value="Subscribe Now"
          />
        </div>
      </form>
    </div>
  </div>
</main>`;

  navigation.insertAdjacentHTML("afterEnd", template);
};

export { renderMain };
