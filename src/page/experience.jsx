import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import BarChartIcon from "@mui/icons-material/BarChart";
import AlbumIcon from "@mui/icons-material/Album";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Timeline() {
  const theme = useTheme();
  const darkBackground = theme.palette.background.paper;
  const darkText = theme.palette.text.primary;

  const contentStyle = { background: darkBackground, color: darkText, border: `2px solid ${darkText}` };
  const contentArrowStyle = { borderRight: `7px solid ${darkBackground}` };
  const iconStyle = { background: theme.palette.primary.main, color: "#fff" };

  return (
    <VerticalTimeline lineColor={theme.palette.primary.main}>
      {/* Technical Consultant Intern - PT. Digital Nusantara Adisolusi (DNA) */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="May 2025 - Present"
        iconStyle={iconStyle}
        icon={<WorkIcon />}
      >
        <Typography variant="h6" component="h3">
          Technical Consultant Intern
        </Typography>
        <Typography variant="subtitle1" component="h4">
          PT. Digital Nusantara Adisolusi (DNA) — Yogyakarta
        </Typography>
        <Typography variant="body1">
          Involved in enterprise solution implementation from assessment and requirements analysis through project kickoff, development, and deployment. Work directly with stakeholders to translate business needs into technical solutions, developing and customizing workflow automation, REST APIs, CRM, and ticketing systems — including integration with external services and Data Warehouse systems. Also integrate third-party GenAI services into system workflows and support production troubleshooting.
        </Typography>
                <Box component="img" src="src/assets/3dolphins.png" alt="3dolphins" sx={{ width: "100%", borderRadius: "8px", mt: 2 }} />
      </VerticalTimelineElement>

      {/* Backend Developer Intern - PT. Digital Nusantara Adisolusi (DNA) */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="Aug 2024 - May 2025"
        iconStyle={iconStyle}
        icon={<WorkIcon />}
      >
        <Typography variant="h6" component="h3">
          Backend Developer Intern
        </Typography>
        <Typography variant="subtitle1" component="h4">
          PT. Digital Nusantara Adisolusi (DNA) — Yogyakarta
        </Typography>
        <Typography variant="body1">
          Developed backend features for authentication, authorization, and data management, including Google OAuth and database integration. Built a web-based CMS with full CRUD functionality and Role-Based Access Control (RBAC) to support content management for authorized users.
        </Typography>
                <Box component="img" src="src/assets/DNA.jpg" alt="DNA" sx={{ width: "100%", borderRadius: "8px", mt: 2 }} />
                <Box component="img" src="src/assets/ipk.png" alt="ipk" sx={{ width: "100%", borderRadius: "8px", mt: 2 }} />
      </VerticalTimelineElement>

      {/* Virtual Assistant Campus */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="Academic Project"
        iconStyle={iconStyle}
        icon={<SmartToyIcon />}
      >
        <Typography variant="h6" component="h3">
          Virtual Assistant Campus
        </Typography>
        <Typography variant="subtitle1" component="h4">
          FastAPI · Ollama · RAG · Docker
        </Typography>
        <Typography variant="body1">
          A web-based virtual assistant prototype exploring how LLMs can support campus information services. Built the backend with FastAPI, integrated an LLM via Ollama using a Retrieval-Augmented Generation (RAG) approach for document-based responses, and containerized the app with Docker.
        </Typography>
        {/* Add a screenshot here, e.g. src/assets/va-campus.jpg */}
      </VerticalTimelineElement>

      {/* GammaFest */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="Competition"
        iconStyle={iconStyle}
        icon={<DirectionsCarFilledIcon />}
      >
        <Typography variant="h6" component="h3">
          GammaFest — Vehicle License Plate Detection
        </Typography>
        <Typography variant="subtitle1" component="h4">
          YOLOv8 · Roboflow
        </Typography>
        <Typography variant="body1">
          Developed a vehicle license plate detection model using YOLOv8, with dataset preprocessing and model training done in Roboflow, as part of a computer vision pipeline for plate detection.
        </Typography>
      </VerticalTimelineElement>

      {/* SatriaData */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="Competition"
        iconStyle={iconStyle}
        icon={<BarChartIcon />}
      >
        <Typography variant="h6" component="h3">
          SatriaData — Data Science Competition
        </Typography>
        <Typography variant="subtitle1" component="h4">
          Python · Google Colab
        </Typography>
        <Typography variant="body1">
          Performed data exploration, preprocessing, and machine learning model development and evaluation for a data science competition.
        </Typography>
      </VerticalTimelineElement>

      {/* Kasetflix */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2024"
        iconStyle={iconStyle}
        icon={<AlbumIcon />}
      >
        <Typography variant="h6" component="h3">
          Kasetflix — Music Cassette Marketplace
        </Typography>
        <Typography variant="subtitle1" component="h4">
          Team Project
        </Typography>
        <Typography variant="body1">
          A music cassette marketplace platform with a Netflix-like interface concept, built collaboratively with a team, including the product catalog system and basic listing features.
        </Typography>
        <Typography variant="body2">
          <a href="https://github.com/Jikoyuo/Platform-Project">Repo</a>
        </Typography>
        <Box component="img" src="src/assets/kasetflix.jpg" alt="Kasetflix" sx={{ width: "100%", borderRadius: "8px", mt: 2 }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<StarIcon />} />
    </VerticalTimeline>
  );
}
