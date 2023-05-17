import html from "html-literal";

export default () => html`
  <section class="contact">
    <div class="content">
      <h2>Contact Us</h2>
      <br />
      <p>
        Some random text here, I need to come up with some words to put into the
        page. The best text that will ever be written. <br />
        Will be some sort of long paragraph, Im not sure what to put in here yet
        but we will see soon enough. Thank you for your patience.
      </p>
    </div>
  </section>
  <br />
  <br />
  <h2>Contact Form:</h2>
  <br />
  <br />
  <div class="contact-box">
    <form>
      <input type="text" class="input-field" placeholder="Your Name" />
      <input type="text" class="input-field" placeholder="Your Email" />
      <input type="text" class="input-field" placeholder="Subject" />
      <textarea
        type="text"
        class="input-field"
        placeholder="Your Message"
      ></textarea>
    </form>
  </div>
`;
