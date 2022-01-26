import { createTheme } from "@mui/material/styles";

export default function AppTheme() {
  let mdTheme = createTheme({
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

  return mdTheme;
}
