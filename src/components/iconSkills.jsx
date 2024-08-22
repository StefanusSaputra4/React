import React from "react";
import Box from "@mui/material/Box";

export default function IconSkills({ icon: Icon, size = 56, color = "inherit", hoverColor = "inherit" }) {
  return (
    <Box
      sx={{
        cursor: "pointer",
        transition: "color 0.3s",
        color: color,
        "&:hover": { color: hoverColor },
      }}
    >
      <Icon size={size} />
    </Box>
  );
}
