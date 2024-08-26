import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AlbumIcon from "@mui/icons-material/Album";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Timeline() {
  const theme = useTheme();
  const darkBackground = theme.palette.background.paper;
  const darkText = theme.palette.text.primary;

  return (
    <VerticalTimeline lineColor={theme.palette.primary.main}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: darkBackground,
          color: darkText,
          border: `2px solid ${darkText}`,
        }}
        contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
        date="2024 - Current"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<LocalHospitalIcon />}
      >
        <Typography variant="h6" component="h3">
          Hospital Information System
        </Typography>
        <Typography variant="subtitle1" component="h4">
          Hospital
        </Typography>
        <Typography variant="body1">
          Developed a Hospital Information System to streamline operations, integrating patient registration, medical records, appointment scheduling, and billing for improved workflow and healthcare quality.
        </Typography>
        <Box component="img" src="https://medevel.com/content/images/size/w1000/2018/12/Open-Hospital_14.png" alt="Hospital System" sx={{ width: "100%", borderRadius: "8px", mt: 2 }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: darkBackground, color: darkText, border: `2px solid ${darkText}` }}
        contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
        date="2024"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<AlbumIcon />}
      >
        <Typography variant="h6" component="h3">
          Create a Website
        </Typography>
        <Typography variant="subtitle1" component="h4">
          Kasetflix
        </Typography>
        <Typography variant="body1">
          I am currently developing a website called 'Kasetflix' as part of a course project. The platform is designed to function similarly to Netflix, allowing users to stream and enjoy various media content online.
        </Typography>
        <Typography variant="body2">
          <a href="https://github.com/Jikoyuo/Platform-Project">Repo</a>
        </Typography>
        <Box component="img" src="src/assets/kasetflix.jpg" alt="Kasetflix" sx={{ width: "100%", borderRadius: "8px", mt: 2 }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: darkBackground, color: darkText, border: `2px solid ${darkText}` }}
        contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
        date="2023"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<PauseOutlinedIcon />}
      >
        <Typography variant="h6" component="h3">
          Create a Mp3 Player WAV
        </Typography>
        <Typography variant="subtitle1" component="h4">
          Mp3 Player
        </Typography>
        <Typography variant="body1">I developed a simple music player in Java, focusing on .wav audio files. This project enhanced my Java skills and provided insights into audio data processing.</Typography>
        <Box component="img" src="src/assets/musicPlayer.jpg" alt="Music Player" sx={{ width: "100%", borderRadius: "8px", mt: 2 }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: darkBackground, color: darkText, border: `2px solid ${darkText}` }}
        contentArrowStyle={{ borderRight: `7px solid ${darkBackground}` }}
        date="2024"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<WorkIcon />}
      >
        <Typography variant="h6" component="h3">
          Becoming a Teaching Assistant
        </Typography>
        <Typography variant="subtitle1" component="h4">
          Yogyakarta, Indonesia
        </Typography>
        <Typography variant="body1">I worked as a teaching assistant for the Linear Data Structures course at Sanata Dharma University in Yogyakarta.</Typography>
        <Box component="img" src="src/assets/asdos.jpg" alt="Teaching Assistant" sx={{ width: "100%", borderRadius: "8px", mt: 2 }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<StarIcon />} />
    </VerticalTimeline>
  );
}
