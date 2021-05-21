import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom";

//component
// import TodoContainer from "./functionBased/components/TodoContainer"

// //stylesheet
// import "./functionBased/App.css"

// import "./myclasscomp/App.css"
// import Todoapp from "./myclasscomp/Todoapp";

import "./myfunccomp/App.css"
import Todoapp from "./myfunccomp/Todoapp"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
        <Todoapp/>
    </Router>  
  </React.StrictMode>, 
  document.getElementById("root")
);