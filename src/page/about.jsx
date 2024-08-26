import React from "react";
import ActionAreaCard from "../components/card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconSkills from "../components/iconSkills";
import { FaJava, FaPython, FaHtml5, FaPhp, FaJs, FaReact } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";

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
        <Typography fontFamily="Centra" variant="body1" paragraph>
          Hello! My name is Stefanus Saputra, a passionate and dedicated Computer Science student at University Sanata Dharma. With a strong foundation in programming languages like Java and Python, and a keen interest in web development, I
          have been exploring various technologies, including React and Material-UI, to build intuitive and responsive web applications. My journey in tech began with a curiosity about how things work behind the scenes, and this curiosity
          has grown into a deep passion for coding and problem-solving. I enjoy turning complex problems into simple, beautiful, and efficient solutions. In my spare time, I contribute to open-source projects and constantly seek to learn
          new skills that can help me grow as a developer.
        </Typography>

        <Typography variant="h4" fontFamily="Centra" align="center" sx={{ mb: 2 }}>
          Programming Skills
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
          <IconSkills icon={FaJava} size={64} hoverColor="#CD5C08" />
          <IconSkills icon={FaPython} size={64} hoverColor="#3FA2F6" />
          <IconSkills icon={FaHtml5} size={64} hoverColor="#E76F51" />
          <IconSkills icon={FaPhp} size={64} hoverColor="#304463" />
          <IconSkills icon={FaJs} size={64} hoverColor="#FFDE4D" />
          <IconSkills icon={FaReact} size={64} hoverColor="#3FA2F6" />
          <IconSkills icon={MdOutlineCss} size={64} hoverColor="black" />
        </Box>

        <Typography variant="h4" fontFamily="Centra" align="center" sx={{ mb: 2 }}>
          Other Skills
        </Typography>

        <Box
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
          <ActionAreaCard
            title="Music"
            image="https://images5.alphacoders.com/565/thumb-1920-565671.jpg"
            desc="Exploring the world of melodies, rhythms, and harmonies, where every note tells a story. Whether it's creating, playing, or just listening, music is a universal language that connects us all."
          />
          <ActionAreaCard
            title="Photography"
            image="https://wallpapers.com/images/hd/taking-landscape-photography-at-mountain-peak-mst8druox12zd28t.webp"
            desc="Capturing moments through the lens, photography is the art of seeing the world in a different light. Every snapshot is a memory, a perspective, a unique view that immortalizes the beauty around us."
          />
          <ActionAreaCard
            title="Design UI/UX"
            image="https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/64664e9cd07202af8bcdc5e4_5757453-p-2000.jpg"
            desc="Crafting seamless and intuitive user experiences, UI/UX design is at the heart of every digital interaction. It's about creating interfaces that are not only functional but also aesthetically pleasing."
          />
          <ActionAreaCard
            title="Public Speaking"
            image="https://creators.noice.id/wp-content/uploads/2023/02/1.-4-Tips-Dasar-Belajar-Public-Speaking-bagi-Podcaster.jpg"
            desc="The art of conveying ideas, inspiring action, and connecting with an audience. Public speaking is more than just words; it's about delivering a message that resonates and leaves a lasting impact."
          />
        </Box>
      </Box>
    </>
  );
}
