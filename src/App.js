import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Count from "./components/count";
import Control from "./components/control";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>This is my first redux tutorial</h1>
        <Count />
        <Control />
      </div>
    </Provider>
  );
}

export default App;
