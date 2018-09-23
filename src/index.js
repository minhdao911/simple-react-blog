import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import reducers from "./reducers";

import PostsIndex from "./containers/PostsIndex";
import PostsNew from "./components/PostsNew";
import PostsShow from "./components/PostsShow";

import registerServiceWorker from "./registerServiceWorker";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
