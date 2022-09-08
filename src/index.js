import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<App />}>  </Route>
        <Route path="/aboutus" element={<AboutUs />}>  </Route>
      </Routes>
    </BrowserRouter>

    
  </React.StrictMode>
);

