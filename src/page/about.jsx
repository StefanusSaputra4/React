import React from "react";
import ActionAreaCard from "../components/card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconSkills from "../components/iconSkills";

export default function About() {
  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          borderBottom: "1px solid #000",
        }}
      >
        <Typography fontFamily="Centra">
          Hello! My name is Stefanus Saputra, a passionate and dedicated Computer Science student at University Sanata Dharma. With a strong foundation in programming languages like Java and Python, and a keen interest in web development, I
          have been exploring various technologies, including React and Material-UI, to build intuitive and responsive web applications. My journey in tech began with a curiosity about how things work behind the scenes, and this curiosity
          has grown into a deep passion for coding and problem-solving. I enjoy turning complex problems into simple, beautiful, and efficient solutions. In my spare time, I contribute to open-source projects and constantly seek to learn
          new skills that can help me grow as a developer.
          <h4>Programming Skills</h4>
          <IconSkills />
          <h4>Other Skills</h4>
        </Typography>
        <Box
          component="sectionCard"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
            borderBottom: "1px solid #000",
          }}
        >
          <ActionAreaCard title="Music" image="https://images5.alphacoders.com/565/thumb-1920-565671.jpg" />
          <ActionAreaCard title="Photography" image="https://wallpapers.com/images/hd/taking-landscape-photography-at-mountain-peak-mst8druox12zd28t.webp" />
          <ActionAreaCard title="Design UI/UX" image="https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/64664e9cd07202af8bcdc5e4_5757453-p-2000.jpg " />
          <ActionAreaCard title="Public Speaking" image="https://creators.noice.id/wp-content/uploads/2023/02/1.-4-Tips-Dasar-Belajar-Public-Speaking-bagi-Podcaster.jpg" />
        </Box>
      </Box>
    </>
  );
}
