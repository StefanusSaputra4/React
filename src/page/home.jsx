import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/navbar";
import Experience from "./experience";
import Contact from "./contact";
import About from "./about";
import Header from "../components/header";
import { FaBold } from "react-icons/fa";

export default function Home({ darkMode, toggleDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Box
        id="home"
        component="section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: { xs: "100%", sm: "sm", md: "md", lg: "lg" }, // Max width responsive
          p: { xs: 2, sm: 3, md: 4 }, // Padding responsive
          mt: { xs: "56px", sm: "64px" }, // Responsive margin top
        }}
      >
        <Header />
      </Box>
      <Box
        id="about"
        component="section"
        sx={{
          textAlign: "center",
          p: { xs: 2, sm: 5 }, // Responsive padding
          mt: { xs: "40px", sm: "55px" }, // Responsive margin top
        }}
      >
        <Typography variant="h3" fontWeight="bold" fontFamily="Centra" sx={{ mb: { xs: 2, sm: 4 } }}>
          About me
        </Typography>
        <About />
      </Box>
      <Box
        id="experience"
        component="section"
        sx={{
          p: { xs: 2, sm: 5 }, // Responsive padding
        }}
      >
        <Typography
          variant="h3"
          fontFamily="Centra"
          fontSize={32}
          fontWeight="bold"
          sx={{
            mb: { xs: 2, sm: 4 },
            textAlign: "center",
          }}
        >
          Experience
          <p>Showcase of my latest works, projects, and Experience.</p>
        </Typography>
        <Experience />
      </Box>

      <Box
        id="contact"
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", sm: "right" },
          alignItems: { xs: "center", sm: "right" },
          p: { xs: 2, sm: 5 }, // Responsive padding
        }}
      >
        <Contact />
      </Box>
    </>
  );
}
