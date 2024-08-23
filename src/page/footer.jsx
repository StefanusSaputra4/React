import { Box, Typography, Link, Divider, TextField, IconButton } from "@mui/material";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Footer({ darkMode }) {
  return (
    <Box
      component="footer"
      sx={{
        padding: "40px 20px",
        backgroundColor: (theme) => theme.palette.background.paper,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        width: "100%",
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          textAlign: "left",
          marginBottom: "2rem",
        }}
      >
        <Box sx={{ margin: "1rem", minWidth: "150px" }}>
          <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "1rem" }}>
            Sitemap
          </Typography>
          <Link href="#" color="inherit" sx={{ display: "block", marginBottom: "0.5rem" }}>
            Home
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", marginBottom: "0.5rem" }}>
            Agency
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", marginBottom: "0.5rem" }}>
            Web design
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", marginBottom: "0.5rem" }}>
            References
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", marginBottom: "0.5rem" }}>
            Career
          </Link>
        </Box>

        <Box sx={{ margin: "1rem", minWidth: "150px" }}>
          <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "1rem" }}>
            Newsletter subscription
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              placeholder="Your email address"
              variant="outlined"
              size="small"
              sx={{
                width: "100%",
                marginRight: "0.5rem",
                backgroundColor: (theme) => theme.palette.background.default,
                borderRadius: "4px",
                input: { color: (theme) => theme.palette.text.primary },
              }}
            />
            <IconButton sx={{ color: (theme) => theme.palette.text.primary }}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ fontSize: "12px", marginTop: "0.5rem" }}>
            You can read about how your data is processed in our{" "}
            <Link href="#" color="inherit">
              privacy policy
            </Link>
            .
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ marginBottom: "1rem", borderColor: (theme) => theme.palette.divider }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          textAlign: "left",
        }}
      >
        <Box>
          <Link href="https://github.com/StefanusSaputra4/" color="inherit" sx={{ marginRight: "10px" }}>
            <FaGithub size="25" />
          </Link>
          <Link href="https://www.instagram.com/stefanussaputra_/" color="inherit" sx={{ marginRight: "10px" }}>
            <FaInstagram size="25" />
          </Link>
          <Link href="#" color="inherit" sx={{ marginRight: "10px" }}>
            <FaLinkedin size="25" />
          </Link>
        </Box>

        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Link href="#" color="inherit" sx={{ fontSize: "12px" }}>
            Indonesia
          </Link>
          <Link href="#" color="inherit" sx={{ fontSize: "12px" }}>
            Data protection
          </Link>
          <Link href="#" color="inherit" sx={{ fontSize: "12px" }}>
            Cookies
          </Link>
        </Box>
      </Box>

      <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
        <Typography variant="body2" sx={{ fontSize: "12px", color: (theme) => theme.palette.text.secondary }}>
          Stefanus Saputra
          <br />
          &copy; {new Date().getFullYear()} – Made with Love in Yogyakarta
        </Typography>
      </Box>
    </Box>
  );
}
