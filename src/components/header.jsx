import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import headerImg from "../assets/header-img.svg"; // Pastikan path SVG benar

export default function Header() {
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
          Welcome!
        </Typography>
        <Typography
          variant="h6"
          fontFamily="Centra"
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
          Stefanus Saputra
        </Typography>
        <Typography variant="h4" fontFamily="Centra" fontSize={{ xs: 18, md: 24 }}>
          Programmer - Developer - Musician
        </Typography>
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
