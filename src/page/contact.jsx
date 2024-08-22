import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Box, Typography } from "@mui/material";
import BasicOutlinedTextarea from "../components/TextArea";
import { IoSend } from "react-icons/io5";

export default function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

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
    if (!formData.get("subject")) {
      newErrors.subject = "Subject is required";
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

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "400px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 1, // Padding tambahan untuk perangkat kecil
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
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Contact Us
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
        <TextField
          id="subject"
          name="subject"
          label="Subject"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.subject}
          helperText={errors.subject}
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
    </Box>
  );
}
