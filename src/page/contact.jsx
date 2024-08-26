import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Box, Typography, useTheme } from "@mui/material";
import BasicOutlinedTextarea from "../components/TextArea";
import { IoSend } from "react-icons/io5";
import Lottie from "lottie-react";
import astronautAnimation from "../assets/astronout.json"; // Ganti dengan path yang sesuai
import astronautAnimation2 from "../assets/astronout2.json"; // Ganti dengan path yang sesuai

export default function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const theme = useTheme(); // Mendapatkan tema saat ini

  const validateForm = () => {
    const formData = new FormData(form.current);
    let valid = true;
    const newErrors = {
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    };

    if (!formData.get("user_name")) {
      newErrors.user_name = "Fullname is required";
      valid = false;
    }
    if (!formData.get("user_email")) {
      newErrors.user_email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.get("user_email"))) {
      newErrors.user_email = "Invalid email address";
      valid = false;
    }

    if (!formData.get("message")) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const result = await emailjs.sendForm("service_b0z1smi", "template_q14nmy9", form.current, "jCfhw4qM4y1xCClgq");
      console.log("SUCCESS!", result.text);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("FAILED...", error.text);
      alert("Failed to send message. Please try again.");
    }
  };

  const darkMode = theme.palette.mode === "dark"; // Menentukan apakah tema gelap aktif

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 1, // Padding tambahan untuk perangkat kecil
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            padding: 3,
            borderRadius: 2,
            boxShadow: (theme) => `0px 0px 10px ${theme.palette.grey[400]}`,
            width: { xs: "100%", sm: "400px" },
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            Contact Me
          </Typography>
          <TextField
            id="user_name"
            name="user_name"
            label="Fullname"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.user_name}
            helperText={errors.user_name}
            InputProps={{
              sx: { color: (theme) => theme.palette.text.primary },
            }}
          />
          <TextField
            id="user_email"
            name="user_email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.user_email}
            helperText={errors.user_email}
            InputProps={{
              sx: { color: (theme) => theme.palette.text.primary },
            }}
          />

          <BasicOutlinedTextarea id="message" name="message" placeholder="Your message here..." error={!!errors.message} helperText={errors.message} />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
            }}
          >
            Send
            <IoSend style={{ marginLeft: "8px", fontSize: "20px" }} />
          </Button>
        </Box>

        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Lottie
            animationData={darkMode ? astronautAnimation : astronautAnimation2}
            loop
            style={{ width: "100%", maxWidth: "400px" }} // Sesuaikan ukuran sesuai kebutuhan
          />
        </Box>
      </Box>
    </Box>
  );
}
