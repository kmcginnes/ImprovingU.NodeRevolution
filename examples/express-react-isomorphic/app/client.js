import { createLocation, createMemoryHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from "react-router"

import routes from "./routes"

ReactDOM.render(
  <Router routes={routes} history={createMemoryHistory()} />, 
  document.getElementById('app')
);
