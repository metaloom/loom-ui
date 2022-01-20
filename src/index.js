import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import WelcomePage from "./Welcome/WelcomePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { shadows } from "@mui/system";

//const theme = createMuiTheme();

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#ccc",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/dash/*" element={<Dashboard />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
