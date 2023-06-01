import { Header, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import { fetchTasks } from "./components/views/Task";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Main(state)}
    ${Footer()}
  `;

  afterRender(state);

  router.updatePageLinks();
}

// add menu toggle to bars icon in nav bar
function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("#mobile-nav").classList.toggle("hidden--mobile");
  });

  const form = document.querySelector("#task-form");
  const taskInput = document.querySelector("#task-input");
  const taskSubmitButton = document
    .querySelector("#task-submit")
    .addEventListener("click", async () => {
      const taskInputElement = document.querySelector("#task-input");
      if (taskInputElement.value.trim() === "") {
        alert("Please enter a task!");
      } else {
        const task = taskInputElement.value;
        await fetch(`${process.env.CAPSTONE_API}/tasks/add/task`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ task: task })
        });
        taskInputElement.value = "";
        fetchTasks();
      }
    });

  if (form && taskInput && taskSubmitButton) {
    taskSubmitButton.addEventListener("click", async () => {
      const taskValue = taskInput.value.trim();

      if (taskValue) {
        const response = await fetch(
          `${process.env.CAPSTONE_API}/tasks/add/task`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ task: taskValue })
          }
        );

        if (response.ok) {
          // Clear the task input
          taskInput.value = "";

          // Fetch the updated task list and update the view
          fetchTasks();
        }
      }
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    done();
  },

  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (Object.prototype.hasOwnProperty.call(store, view)) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
