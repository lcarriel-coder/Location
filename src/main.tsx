import React from "react";
import ReactDOM from "react-dom/client";
import Location from "./Location.tsx";
import { Provider } from 'react-redux';
import { store } from "./store";
import "tailwindcss/tailwind.css";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Location />
    </Provider>
  </React.StrictMode>
);
