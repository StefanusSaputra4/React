import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, useTheme } from "@mui/material";
import headerImg from "../assets/header-img.svg"; // Pastikan path SVG benar
import Link from "@mui/material/Link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import IconSkills from "./iconSkills";

export default function Header() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        minHeight: "300px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Responsif: kolom di perangkat kecil, baris di perangkat besar
        justifyContent: "center", // Sesuaikan posisi gambar dan teks
        alignItems: "center",
        position: "relative",
        p: 3,
        textAlign: { xs: "center", md: "left" }, // Responsif: rata tengah di perangkat kecil, rata kiri di perangkat besar
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" }, // Responsif: rata tengah di perangkat kecil, rata kiri di perangkat besar
          mb: { xs: 3, md: 0 }, // Margin bottom di perangkat kecil
        }}
      >
        <Typography
          variant="h6"
          fontFamily="sans-serif"
          fontSize={{ xs: 32, md: 64 }} // Responsif: ukuran font lebih kecil di perangkat kecil
          sx={{
            background: "linear-gradient(to right, #f472b6, #64748b, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            fontWeight: "bold",
            letterSpacing: "tight",
            mb: 1,
          }}
        >
          Hi !
        </Typography>
        <Typography
          variant="h3"
          fontFamily="Centra"
          fontSize={{ xs: 48, md: 64 }} // Responsif: ukuran font lebih kecil di perangkat kecil
          sx={{
            background: "linear-gradient(to right, #f472b6, #64748b, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            fontWeight: "bold",
            letterSpacing: "tight",
            mb: 1,
          }}
        >
          it's Stefanus Saputra
        </Typography>
        <Typography variant="h4" fontFamily="Centra" fontSize={{ xs: 24, md: 48 }}>
          <span style={{ fontWeight: "normal" }}>i'm a </span>
          <span
            style={{
              background: "linear-gradient(to right, #f472b6, #64748b, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              fontWeight: "bold",
              letterSpacing: "tight",
              mb: 1,
            }}
          >
            Programmer
          </span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Link href="https://github.com/StefanusSaputra4/" color="inherit">
            <IconSkills icon={FaGithub} size={32} />
          </Link>
          <Link href="https://www.instagram.com/stefanussaputra_/" color="inherit">
            <IconSkills icon={FaInstagram} size={32} hoverColor="#E1306C" />
          </Link>
          <Link href="https://github.com/StefanusSaputra4/" color="inherit">
            <IconSkills icon={FaLinkedin} size={32} hoverColor="#0000ff" />
          </Link>
        </Box>

        <Button
          variant="outlined"
          sx={{
            mt: 2, // Margin top untuk memberi jarak dari teks
            borderColor: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)", // Warna border menyesuaikan mode
            color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)", // Warna teks menyesuaikan mode
            backgroundColor: "transparent", // Warna latar transparan
            "&:hover": {
              background: "linear-gradient(to right, #f472b6, #64748b, #a855f7)", // Gradient saat hover
              color: "white", // Warna teks saat hover
              borderColor: "transparent", // Hilangkan border saat hover
            },
          }}
        >
          <Link
            href="#contact"
            sx={{
              textDecoration: "none",
              // Margin top untuk memberi jarak dari teks
              borderColor: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)", // Warna border menyesuaikan mode
              color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)", // Warna teks menyesuaikan mode
              backgroundColor: "transparent", // Warna latar transparan
              "&:hover": {
                background: "linear-gradient(to right, #f472b6, #64748b, #a855f7)", // Gradient saat hover
                color: "white", // Warna teks saat hover
                borderColor: "transparent", // Hilangkan border saat hover
              },
            }}
          >
            Contact Me
          </Link>
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={headerImg}
          alt="Header Img"
          className="animated-svg" // Pastikan kelas animasi diterapkan
          style={{
            width: "100%",
            maxWidth: "600px", // Menetapkan lebar maksimum
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
}
