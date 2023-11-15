import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../Css/output.css";
import StateContextProvider from "./Context/StateContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContextProvider>
        <Provider store={store}>

        <App />
        </Provider>
      </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
