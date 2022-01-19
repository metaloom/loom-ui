import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Assets from './Assets';

function App() {
  //return <Button variant="contained">Hello World</Button>;
  return <Dashboard />;
  //return <SignIn />;
}

ReactDOM.render((
<BrowserRouter>
    <Routes>
      <Route path="dash" element={<Dashboard/> }/>
      <Route exact path="/" element={<SignIn/>}/>
      <Route exact path="/assets" element={<Assets />}/>
    </Routes>
</BrowserRouter>
), document.querySelector('#app'));