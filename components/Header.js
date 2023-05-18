import html from "html-literal";

export default () => html`
  <header>
    <div class="desktop-nav-container">
      <h2 class="logo">TASK.IN</h2>
      <!-- <img src="/assets/LOGO.png" /> -->
      <nav class="navigation">
        <ul class="desktop-nav nav-links">
          <li><a href="/Home">Home</a></li>
          <li><a href="/Task">Dashboard</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
        <i class="fas fa-bars"></i>
      </nav>
    </div>
    <div class="mobile-nav-container">
      <ul id="mobile-nav" class="mobile-nav hidden--mobile">
        <a href="/Home"><li>Home</li></a>
        <a href="/Task"><li>Dashboard</li></a>
        <a href="/About"><li>About</li></a>
        <a href="/Contact"><li>Contact</li></a>
      </ul>
    </div>
  </header>
`;
