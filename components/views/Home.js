import html from "html-literal";

export default state => html`
  <div class="home-cont">
    <h1 class="home-header">WELCOME TO TASK.IN</h1>
    <p class="main-p">
      A place where you can stay organized and keep track of all your ideas and
      future goals. <br />
      Here we will help you and your team create, assign and mark tasks and
      projects for your company.
    </p>
    <h3 class="weather-info">
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}&#176;F, and it feels like
      ${state.weather.feelsLike}&#176;F.
    </h3>
  </div>
`;
