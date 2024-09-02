import React, { useState } from "react";
import { Button } from "@mui/material";
import TrainIcon from "@mui/icons-material/Train";
import StationIcon from "@mui/icons-material/LocationCity";
import AppreciationIcon from "@mui/icons-material/ThumbUp";
import EnquiryIcon from "@mui/icons-material/HelpOutline";
import TrackIcon from "@mui/icons-material/TrackChanges";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Box } from "@mui/material";
import TrainGrievances from "../Train/TrainGrievance";
import StationGrievances from "../Station/StationGrievances";
import Enquiry from "../enquiry/Enquiry";
import Appreciation from "../appreciation/Appreciation";
import TrackConcern from "../Station/StationGrievances";
import Suggestions from "../suggestions/Suggestions";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("TRAIN");
  const componentMapping = {
    TRAIN: <TrainGrievances />,
    STATION: <StationGrievances />,
    "APPRECIATION/TRAIN ANUBHAV": <Appreciation />,
    ENQUIRY: <Enquiry />,
    "TRACK YOUR CONCERN": <TrackConcern />,
    SUGGESTIONS: <Suggestions />,
  };

  const buttonList = [
    { name: "TRAIN", icon: <TrainIcon fontSize="inherit" /> },
    { name: "STATION", icon: <StationIcon fontSize="inherit" /> },
    {
      name: "APPRECIATION/TRAIN ANUBHAV",
      icon: <AppreciationIcon fontSize="inherit" />,
    },
    { name: "ENQUIRY", icon: <EnquiryIcon fontSize="inherit" /> },
    { name: "TRACK YOUR CONCERN", icon: <TrackIcon fontSize="inherit" /> },
    { name: "SUGGESTIONS", icon: <FeedbackIcon fontSize="inherit" /> },
  ];

  const images = [
    "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-1.png",
    "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-2.png",
    "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-3.png",
    "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-4.png",
    "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-5.png",
    "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-6.png",
    "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-7.png",
    "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-2.png",
  ];

  const renderForm = () => {
    return (
      <Box
        className="p-8 bg-white shadow-md "
        style={{
          width: "100%",
          backgroundColor: "#edeceb",
          borderLeft: "5px solid #f58220",
          height: "630px",
          marginRight: "20px",

          overflow: "auto",
        }}
      >
        {componentMapping[activeButton]}
      </Box>
    );
  };

  return (
    <div className="flex h-screen mr-[100px]">
      <div className="w-1/2 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-14">
          {images.map((src, index) => (
            <div key={index} className="w-20 h-20">
              <img
                src={src}
                alt={`${index + 1}`}
                className="rounded-full object-cover w-full h-full cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 flex">
        <div className="flex flex-col justify-center w-1/4">
          {buttonList.map((button) => (
            <Button
              key={button.name}
              onClick={() => setActiveButton(button.name)}
              className="text-white font-extrabold flex flex-col items-center justify-center"
              style={{
                backgroundColor:
                  activeButton === button.name ? "#75002b" : "#920b3e",
                padding: "10px",
                margin: "0",
                borderRadius: "0",
                fontSize: "1rem",
                width: "100%",
                minWidth: "200px",
              }}
            >
              {React.cloneElement(button.icon, {
                style: { fontSize: 40, color: "white" },
              })}
              <span className="mt-2 text-white text-l font-bold">
                {button.name}
              </span>
            </Button>
          ))}
        </div>

        <div className="flex flex-col justify-center w-3/4 h-auto">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
