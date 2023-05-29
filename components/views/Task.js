import html from "html-literal";

export default state => html`
  <div class="blob">
    <div class="task-app">
      <h2 class="dash">Dashboard</h2>
      <form id="taskForm" class="row" method="POST">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name of task"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description of task"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="status"
            name="status"
            placeholder="Status"
            required
          />
        </div>
        <input id="submit" type="submit" name="submit" value="Create Task" />
      </form>

      <table id="taskData">
        <tr>
          <th>Task Name</th>
          <th>Task Description</th>
          <th>Task Status</th>
        </tr>
        ${state.tasks
          .map(Task => {
            return `<tr><td>${Task.name}</td><td>${Task.description}</td><td>${Task.status}
        }</td></tr>`;
          })
          .join("")}
      </table>
    </div>
  </div>
`;
