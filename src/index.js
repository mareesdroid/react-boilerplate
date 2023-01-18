import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";


import { Provider } from 'react-redux'
import store from './redux/store'
import {  ToastContainer } from 'react-toastify';

import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>hello</h1>
  <ToastContainer />
  <Provider store={store}>
    <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);


