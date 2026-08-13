import React from "react";
import ActionAreaCard from "../components/card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconSkills from "../components/iconSkills";
import { FaJava, FaPython, FaJs } from "react-icons/fa";
import { SiPostgresql, SiDocker, SiGit, SiPostman } from "react-icons/si";

const coreExpertise = [
  "Backend Development",
  "REST API Development",
  "Workflow Automation",
  "CRM & Ticketing Integration",
  "System Integration",
  "LLM & RAG Integration",
];

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
          Hello! My name is Stefanus Saputra, an Informatics student at Sanata Dharma University currently working as a Technical Consultant Intern at PT. Digital Nusantara Adisolusi (DNA). Over the past year and a half, I've been
          involved end-to-end in enterprise solution implementation — from requirements analysis and kickoff, through backend development, REST API and CRM/ticketing integration, to deployment and production support. My journey in tech
          began with a curiosity about how things work behind the scenes, and it has grown into a genuine interest in backend systems, automation, and, more recently, integrating LLMs into real workflows. I enjoy turning complex,
          messy requirements into solutions that are simple, reliable, and easy to maintain.
          <h4>Programming Skills</h4>
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
            <IconSkills icon={FaPython} hoverColor="#3FA2F6" />
            <IconSkills icon={FaJs} hoverColor="#FFDE4D" />
            <IconSkills icon={SiPostgresql} hoverColor="#336791" />
            <IconSkills icon={SiDocker} hoverColor="#2496ED" />
            <IconSkills icon={SiGit} hoverColor="#F05032" />
            <IconSkills icon={SiPostman} hoverColor="#FF6C37" />
          </Box>

          <h4>Core Expertise</h4>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            {coreExpertise.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  fontFamily: "Centra",
                  bgcolor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                }}
              />
            ))}
          </Box>

          <h4>Beyond Work</h4>
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
