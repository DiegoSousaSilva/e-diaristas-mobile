import React from "react";
import Routes from "ui/routes/routes";
import ThemeProvider from "ui/themes/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}
