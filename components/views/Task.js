import html from "html-literal";

const API_BASE = process.env.CAPSTONE_API || "http://localhost:4040";

export const fetchTasks = async () => {
  try {
    const response = await fetch(`${API_BASE}/tasks`);
    const tasks = await response.json();
    const ulElement = document.querySelector(".task-app ul");
    ulElement.innerHTML = ""; // Clear existing task list
    tasks.forEach(task => {
      const liElement = document.createElement("li");
      liElement.textContent = task.task;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteTask(task._id));

      liElement.appendChild(deleteButton);
      ulElement.appendChild(liElement);
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const deleteTask = async taskId => {
  try {
    await fetch(`${API_BASE}/tasks/delete/task/${taskId}`, {
      method: "DELETE"
    });
    fetchTasks();
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export default state => {
  fetchTasks();
  return html`
    <div class="blob">
      <div class="task-app">
        <h2 class="dash">Dashboard</h2>
        <form id="task-form" class="row">
          <input
            id="task-input"
            type="text"
            name="task"
            placeholder="Enter Task"
          />
          <button type="button" id="task-submit">Add Task</button>
        </form>
        <div class="task-list-container">
          <ul class="task-list"></ul>
        </div>
      </div>
    </div>
  `;
};
