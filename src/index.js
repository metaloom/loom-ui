import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
//import Dashboard from "./Dashboard";
import SignIn from "./SignIn";

function App() {
  //return <Button variant="contained">Hello World</Button>;
  //return <Dashboard />;
  return <SignIn />;
}

ReactDOM.render(<App />, document.querySelector('#app'));