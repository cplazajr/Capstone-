import html from "html-literal";

export default () => html`
  <div class="blob">
    <div class="task-app">
      <h2 class="dash">Dashboard</h2>
      <br />
      <br />
      <div class="row">
        <input type="text" id="input-box" placeholder="Add your text" />
        <button>Add</button>
      </div>
      <ul id="list-box">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </div>
  </div>
`;
