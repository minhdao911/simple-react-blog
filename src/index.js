import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import reducers from "./reducers";

import PostsIndex from "./components/PostsIndex";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
