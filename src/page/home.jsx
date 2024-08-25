import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/navbar";
import Experience from "./experience";
import Contact from "./contact";
import About from "./about";
import Header from "../components/header";

export default function Home({ darkMode, toggleDarkMode }) {
  const [inView, setInView] = useState({ home: false, about: false, experience: false, contact: false });

  const observeRef = (id) => {
    return (node) => {
      if (node !== null) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setInView((prev) => ({ ...prev, [id]: entry.isIntersecting }));
          },
          { threshold: 0.1 }
        );
        observer.observe(node);
        return () => observer.unobserve(node);
      }
    };
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Box
        id="home"
        component="section"
        ref={observeRef("home")}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: { xs: "100%", sm: "sm", md: "md", lg: "lg" },
          p: { xs: 2, sm: 3, md: 4 },
          mt: { xs: "56px", sm: "64px" },
          transition: "opacity 2s ease-out, transform 1s ease-out",
          opacity: inView.home ? 1 : 0,
          transform: inView.home ? "translateX(0)" : "translateX(-20px)",
        }}
      >
        <Header />
      </Box>

      <Box
        id="about"
        component="section"
        ref={observeRef("about")}
        sx={{
          textAlign: "center",
          p: { xs: 2, sm: 5 },
          mt: { xs: "40px", sm: "55px" },
          transition: "opacity 2s ease-out, transform 1s ease-out",
          opacity: inView.about ? 1 : 0,
          transform: inView.about ? "translateY(0)" : "translateY(20px)",
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
        ref={observeRef("experience")}
        sx={{
          p: { xs: 2, sm: 5 },
          transition: "opacity 2s ease-out, transform 1s ease-out",
          opacity: inView.experience ? 1 : 0,
          transform: inView.experience ? "translateY(0)" : "translateY(20px)",
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
        ref={observeRef("contact")}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", sm: "right" },
          alignItems: { xs: "center", sm: "right" },
          p: { xs: 2, sm: 5 },
          transition: "opacity 2s ease-out, transform 2s ease-out",
          opacity: inView.contact ? 1 : 0,
          transform: inView.contact ? "translateX(0px)" : "translateX(-40px)",
        }}
      >
        <Contact darkMode={darkMode} />
      </Box>
    </>
  );
}
