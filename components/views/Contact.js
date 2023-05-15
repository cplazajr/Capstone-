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
  <form>
    <div class="input-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="name" />
    </div>
    <div></div>
  </form>
`;
