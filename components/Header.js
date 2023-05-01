import html from "html-literal";

export default () => html`
  <header>
    <h2 class="logo">TASK.IN</h2>
    <nav class="navigation">
      <i class="fas fa-bars"></i>
      <ul class="hidden--mobile nav-links">
        <a href="/Home">Home</a>
        <a href="/Task">Dashboard</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
      </ul>
    </nav>
  </header>
`;
