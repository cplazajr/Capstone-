import { Header, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Main(state)}
    ${Footer()}
  `;

  afterRender(state);
  addTask();

  router.updatePageLinks();
}

// add menu toggle to bars icon in nav bar
function afterRender() {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("#mobile-nav").classList.toggle("hidden--mobile");
  });
}

// Dashboard Code
let taskList = [];

function addTask() {
  document.querySelector("#btn-listen").addEventListener("click", event => {
    event.preventDefault();
    let value = document.querySelector("#input-box").value;
    let list = document.querySelector("#list-box");
    let li = document.createElement("li");

    taskList.push(value);
    li.appendChild(document.createTextNode(value));
    li.setAttribute("id", `task ${taskList.length - 1}`);
    list.appendChild(li);
    document.querySelector("#taskForm").reset();

    //console.log(taskList);
  });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=Orlando`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;

      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

// router
//   .on({
//     "/": () => render(),
//     ":view": params => {
//       let view = capitalize(params.data.view);
//       if (store.hasOwnProperty(view)) {
//         render(store[view]);
//       } else {
//         // render(store.Viewnotfound);
//         console.log(`View ${view} not defined`);
//       }
//     }
//   })
//   .resolve();

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (Object.prototype.hasOwnProperty.call(store, view)) {
        render(store[view]);
      } else {
        // render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
