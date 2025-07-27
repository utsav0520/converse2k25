import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { thunk } from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <App />
        <ToastContainer />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
);
