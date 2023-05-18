import html from "html-literal";

export default () => html`
  <div class="contact-container">
    <h2 class="contact">Contact Me:</h2>
    <div class="contact-box">
      <form class="contact-form" action="/Contact" method="GET">
        <input
          type="text"
          class="input-field"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          class="input-field"
          placeholder="Your Email"
          required
        />
        <input type="text" class="input-field" placeholder="Subject" required />
        <textarea
          type="text"
          class="input-field textarea-field"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" class="btn">SUBMIT</button>
      </form>
    </div>
  </div>
`;
