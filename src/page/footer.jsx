import { Box, Typography, Link, Divider } from "@mui/material";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      component="footer"
      position={"relative"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: (theme) => theme.palette.background.paper, // Warna latar belakang mengikuti tema
        borderTop: (theme) => `1px solid ${theme.palette.divider}`, // Warna border mengikuti tema
        marginTop: "auto",
        width: "100%", // Memastikan lebar penuh
      }}
    >
      <Box
        id="sb_footer-link"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          width: "100%",
          textAlign: "left",
          marginBottom: "2rem",
        }}
      >
        <Box
          id="sb_footer-links_div"
          sx={{
            width: "150px",
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            color: (theme) => theme.palette.text.primary, // Warna teks mengikuti tema
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "14px", lineHeight: "17px", marginBottom: "0.9rem" }}>
            For Business
          </Typography>
          <Link href="#" color="inherit" sx={{ fontSize: "12px", lineHeight: "15px", margin: "0.5rem" }}>
            Employer
          </Link>
          <Link href="#" color="inherit" sx={{ fontSize: "12px", lineHeight: "15px", margin: "0.5rem" }}>
            Individual
          </Link>
        </Box>

        <Box
          id="sb_footer-links_div"
          sx={{
            width: "150px",
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            color: (theme) => theme.palette.text.primary,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "14px", lineHeight: "17px", marginBottom: "0.9rem" }}>
            Resources
          </Typography>
          <Link href="#" color="inherit" sx={{ fontSize: "12px", lineHeight: "15px", margin: "0.5rem" }}>
            Option 1
          </Link>
          <Link href="#" color="inherit" sx={{ fontSize: "12px", lineHeight: "15px", margin: "0.5rem" }}>
            Option 2
          </Link>
        </Box>

        <Box
          id="sb_footer-links_div"
          sx={{
            width: "150px",
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            color: (theme) => theme.palette.text.primary,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "14px", lineHeight: "17px", marginBottom: "0.9rem" }}>
            Partners
          </Typography>
          <Link href="#" color="inherit" sx={{ fontSize: "12px", lineHeight: "15px", margin: "0.5rem" }}>
            Option 1
          </Link>
          <Link href="#" color="inherit" sx={{ fontSize: "12px", lineHeight: "15px", margin: "0.5rem" }}>
            Option 2
          </Link>
        </Box>

        <Box
          id="sb_footer-links_div"
          sx={{
            width: "150px",
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            color: (theme) => theme.palette.text.primary,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "14px", lineHeight: "17px", marginBottom: "0.9rem" }}>
            Company
          </Typography>
          <Link href="#aboutMe" color="inherit" sx={{ fontSize: "12px", lineHeight: "15px", margin: "0.5rem" }}>
            About
          </Link>
          <Link href="#" color="inherit" sx={{ fontSize: "12px", lineHeight: "15px", margin: "0.5rem" }}>
            Press
          </Link>
          <Link href="#" color="inherit" sx={{ fontSize: "12px", lineHeight: "15px", margin: "0.5rem" }}>
            Careers
          </Link>
          <Link href="#contactMe" color="inherit" sx={{ fontSize: "12px", lineHeight: "15px", margin: "0.5rem" }}>
            Contact
          </Link>
        </Box>

        <Box
          id="sb_footer-links_div"
          sx={{
            width: "150px",
            margin: "0.5rem",
            display: "flex",
            flexDirection: "column",
            color: (theme) => theme.palette.text.primary,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "14px", lineHeight: "17px", marginBottom: "0.9rem" }}>
            Coming Soon on
          </Typography>
          <Box
            id="socialmedia"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px", // Jarak antara ikon sosial media
            }}
          >
            <Link href="https://github.com/HerodionY" color="inherit">
              <FaGithub size="25" style={{ color: (theme) => theme.palette.text.primary }} />
            </Link>
            <Link href="#" color="inherit">
              <FaInstagram size="25" style={{ color: (theme) => theme.palette.text.primary }} />
            </Link>
            <Link href="#" color="inherit">
              <FaLinkedin size="25" style={{ color: (theme) => theme.palette.text.primary }} />
            </Link>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ color: (theme) => theme.palette.text.primary, width: "100%" }} />

      <Box
        id="sb_footer-below"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          marginTop: "0.2rem",
          width: "100%", // Memastikan lebar penuh
          color: (theme) => theme.palette.text.primary, // Warna teks mengikuti tema
        }}
      >
        <Box id="sb_footer-copyright">
          <Typography
            sx={{
              fontSize: "13px",
              lineHeight: "15px",
              fontWeight: "600",
            }}
          >
            &copy; {new Date().getFullYear()} Herodion. All rights reserved.
          </Typography>
        </Box>
        <Box
          id="sb_footer-below-links"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            marginTop: { xs: "1rem", sm: "0" },
            gap: { sm: "2rem" }, // Jarak antara link
          }}
        >
          <Link
            href="#"
            color="inherit"
            sx={{
              fontSize: "13px",
              lineHeight: "15px",
              fontWeight: "600",
            }}
          >
            Terms & Conditions
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{
              fontSize: "13px",
              lineHeight: "15px",
              fontWeight: "600",
            }}
          >
            Privacy
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{
              fontSize: "13px",
              lineHeight: "15px",
              fontWeight: "600",
            }}
          >
            Security
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{
              fontSize: "13px",
              lineHeight: "15px",
              fontWeight: "600",
            }}
          >
            Cookie Declaration
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
