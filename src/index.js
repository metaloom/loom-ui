import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Assets from './Asset/AssetList';

ReactDOM.render((
<BrowserRouter>
    <Routes>
      <Route path="dash" element={<Dashboard/> }/>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/assets" element={<Assets />}/>
    </Routes>
</BrowserRouter>
), document.querySelector('#app'));