import html from "html-literal";

export default () => html`
  <div class="blob">
    <div class="task-app">
      <h2 class="dash">Dashboard</h2>
      <form id="taskForm" class="row" method="POST">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Add your text"
          required
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Add your text"
          required
        />
        <input
          type="text"
          id="status"
          name="status"
          placeholder="Add your text"
          required
        />
        <input type="submit" name="submit" value="Submit" />
      </form>
      <ul id="list-box"></ul>
    </div>
  </div>
`;

{
  /* <button id="btn-listen" class="add-task-btn">ADD</button> */
}
