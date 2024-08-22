import React from "react";
import { FaJava, FaPython, FaHtml5, FaPhp, FaJs, FaReact } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import Box from "@mui/material/Box";
export default function IconSkills() {
  return (
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
      <Box sx={{ cursor: "pointer", transition: "color 0.3s", "&:hover": { color: "#CD5C08" } }}>
        <FaJava size={64} />
      </Box>
      <Box sx={{ cursor: "pointer", transition: "color 0.3s", "&:hover": { color: "#3FA2F6" } }}>
        <FaPython size={56} />
      </Box>
      <Box sx={{ cursor: "pointer", transition: "color 0.3s", "&:hover": { color: "#E76F51" } }}>
        <FaHtml5 size={56} />
      </Box>
      <Box sx={{ cursor: "pointer", transition: "color 0.3s", "&:hover": { color: "#304463" } }}>
        <FaPhp size={56} />
      </Box>
      <Box sx={{ cursor: "pointer", transition: "color 0.3s", "&:hover": { color: "#FFDE4D" } }}>
        <FaJs size={56} />
      </Box>
      <Box sx={{ cursor: "pointer", transition: "color 0.3s", "&:hover": { color: "#3FA2F6" } }}>
        <FaReact size={56} />
      </Box>
      <Box sx={{ cursor: "pointer", transition: "color 0.3s", "&:hover": { color: "black" } }}>
        <MdOutlineCss size={56} />
      </Box>
    </Box>
  );
}
