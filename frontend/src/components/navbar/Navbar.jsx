import { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CallIcon from "@mui/icons-material/Call";

const Navbar = () => {
  const [language, setLanguage] = useState("Language");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-white px-8 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <div className="flex space-x-2">
          <img
            src="https://railmadad.indianrailways.gov.in/madad/final/images/logog20.png"
            alt="G20 Logo"
            className="w-[200px]"
          />
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="text-4xl font-bold" style={{ color: "#75002b" }}>
              RailMadad
            </h1>
            <p className="text-lg mt-1">
              For Inquiry, Assistance & Grievance Redressal
            </p>
          </div>

          <div className="flex items-center ml-4">
            <div className="flex items-center bg-[#d26227] text-white px-4 py-4 rounded-lg">
              <CallIcon className="text-white" style={{ fontSize: "2rem" }} />
              <span className="text-3xl font-bold">139</span>
            </div>
            <span
              className="text-base ml-2"
              style={{
                fontSize: "1.25rem",
                alignSelf: "center",
              }}
            >
              for Security/Medical Assistance
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button className="bg-[#dcdef9] text-black px-6 py-3 rounded-lg text-lg">
          Login
        </button>
        <button className="bg-[#efe4e8] text-black px-6 py-3 rounded-lg text-lg">
          Signup
        </button>

        <div>
          <Button
            onClick={handleClick}
            className="flex items-center bg-gray-200 text-black px-4 py-2 rounded-lg"
            endIcon={<ArrowDropDownIcon />}
          >
            🌐 {language}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleLanguageChange("हिन्दी")}>
              हिन्दी
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("বাংলা")}>
              বাংলা
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("ગુજરાતી")}>
              ગુજરાતી
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("தமிழ்")}>
              தமிழ்
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("తెలుగు")}>
              తెలుగు
            </MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
