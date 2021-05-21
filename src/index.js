import React from "react"
import ReactDOM from "react-dom"

import { HashRouter  as Router } from "react-router-dom";

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
    <Router>
        <Todoapp/>
    </Router>  
  </React.StrictMode>, 
  document.getElementById("root")
);
