import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MusicPlayerProvider from "./context/MusicPlayerProvider";
import {BrowserRouter} from "react-router-dom";
import PopupProvider from "./context/PopupProvider";
import AuthenticationContextProvider from "./context/AuthenticationContextProvider";
import UserContextProvider from "./context/UserContextProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthenticationContextProvider>
              <UserContextProvider>
                  <PopupProvider>
                      <MusicPlayerProvider>
                          <App />
                      </MusicPlayerProvider>
                  </PopupProvider>
              </UserContextProvider>
          </AuthenticationContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
