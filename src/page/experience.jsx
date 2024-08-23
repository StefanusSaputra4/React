import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AlbumIcon from "@mui/icons-material/Album";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";

export default function Timeline() {
  const theme = useTheme();

  // Warna berdasarkan tema
  const darkBackground = theme.palette.background.paper;
  const darkText = theme.palette.text.primary;
  const lightBackground = theme.palette.background.paper;
  const lightText = theme.palette.text.primary;

  return (
    <VerticalTimeline lineColor={theme.palette.primary.main}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: darkBackground,
          color: darkText,
          border: `2px solid ${darkText}`, // Menambahkan border
        }}
        contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
        date="2024 - Current"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<LocalHospitalIcon />}
      >
        <h3 className="vertical-timeline-element-title">Hospital Information System</h3>
        <h4 className="vertical-timeline-element-subtitle">Hospital</h4>
        <p>Developed a Hospital Information System to streamline operations, integrating patient registration, medical records, appointment scheduling, and billing for improved workflow and healthcare quality.</p>
        <img src="https://medevel.com/content/images/size/w1000/2018/12/Open-Hospital_14.png" alt="Hospital System" style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: darkBackground, color: darkText, border: `2px solid ${darkText}` }}
        contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
        date="2024"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<AlbumIcon />}
      >
        <h3 className="vertical-timeline-element-title">Create a Website</h3>
        <h4 className="vertical-timeline-element-subtitle">Kasetflix</h4>
        <p>I am currently developing a website called 'Kasetflix' as part of a course project. The platform is designed to function similarly to Netflix, allowing users to stream and enjoy various media content online.</p>
        <a href="https://github.com/Jikoyuo/Platform-Project">Repo</a>
        <img src="src/assets/kasetflix.jpg" alt="Kasetflix" style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: darkBackground, color: darkText, border: `2px solid ${darkText}` }}
        contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
        date="2023"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<PauseOutlinedIcon />}
      >
        <h3 className="vertical-timeline-element-title">Create a Mp3 Player WAV</h3>
        <h4 className="vertical-timeline-element-subtitle">Mp3 Player</h4>
        <p>I developed a simple music player in Java, focusing on .wav audio files. This project enhanced my Java skills and provided insights into audio data processing.</p>
        <img src="src/assets/musicPlayer.jpg" alt="Music Player" style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: darkBackground, color: darkText, border: `2px solid ${darkText}` }}
        contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
        date="2024"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Becoming a Teaching Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">Yogyakarta, Indonesia</h4>
        <p>I worked as a teaching assistant for the Linear Data Structures course at Sanata Dharma University in Yogyakarta.</p>
        <img src="src/assets/asdos.jpg" alt="Teaching Assistant" style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<StarIcon />} />
    </VerticalTimeline>
  );
}
