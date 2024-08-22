import React, { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline, Box, Container } from "@mui/material";
import Home from "./page/home";
import Footer from "./page/footer";
import ParticlesComponent from "./components/particles";

// Tema light dan dark
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    background: { default: "#ffffff", paper: "#ffffff", paper2: "#fcfcfc" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#a855f7" },
    background: { default: "#121212", paper: "#121212", paper2: "black" },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {darkMode && <ParticlesComponent isDarkMode={darkMode} />}
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container
          sx={{
            flexGrow: 1,
            maxWidth: "100%", // Memastikan Container tidak membatasi lebar
            px: 0, // Menghilangkan padding horizontal
          }}
        >
          <Home darkMode={darkMode} toggleDarkMode={handleThemeChange} />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
