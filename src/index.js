import React from 'react';
import ReactDOM from 'react-dom'
import {BrowswerRouter } from 'react-router-dom'

// In React, the BrowserRouter 
// component is a part of the react-router-dom 
// library and it is used to define the routing
//  behavior for your React application. 
 
//  It works by creating a new BrowserRouter
//   instance and wrapping your application's root
//    component in it.

// // The BrowserRouter uses the HTML5 
// history API to keep the UI in sync
//  with the URL of the current page.
 
//  It uses the window.location object to
//   listen for changes to the current URL,
//    and updates the UI accordingly.

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <BrowswerRouter>
    <App />
    </BrowswerRouter>
)