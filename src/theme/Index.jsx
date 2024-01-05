'use client'

import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import React from "react";

function Theme({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#139CE0",
        light: "#00ab55",
      },
      secondary: {
        main: "#64748B",
      },
      custom: {
        dark: '#3A3541DE'
      },
      customTextColor:  {
        main: '#3A3541DE'
      },
      typography: {
        fontFamily: "Inter",
      },
    },
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Theme;
