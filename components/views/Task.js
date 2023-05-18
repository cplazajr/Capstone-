import html from "html-literal";

export default () => html`
  <div class="blob">
    <div class="task-app">
      <h2 class="dash">Dashboard</h2>
      <form id="taskForm" class="row">
        <input type="text" id="input-box" placeholder="Add your text" />
        <button id="btn-listen" class="add-task-btn">ADD</button>
      </form>
      <ul id="list-box"></ul>
    </div>
  </div>
`;
