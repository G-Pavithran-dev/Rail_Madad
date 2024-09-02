import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import { OutlinedInput } from "@mui/material";

export default function Enquiry() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#000000", // Light grey background
      },
      primary: {
        main: "#000000", // Blue for primary actions and highlights
      },
      secondary: {
        main: "#000000", // Pink for secondary actions and highlights
      },
    },
  });

  const [mobileNumber, setMobileNumber] = useState("");
  const [grievance, setGrievance] = useState("");
  const [subType, setSubType] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    console.log("Mobile Number:", mobileNumber);
    console.log("Grievance:", grievance);
    console.log("Sub Type:", subType);
    console.log("Incident Date:", incidentDate);
    console.log("File:", file);
  };

  const grievanceOptions = [
    "Medical Assistance",
    "Security",
    "Divyangjan Facilities",
    "Facilities for Women with Special Needs",
    "Electric Equipment",
    "Coach-Cleanliness",
    "Punctuality",
    "Water Availablitity",
    "Coach Maintanance",
    "Catering & Vending Service",
    "Staff Behaviour",
    "Bed Roll",
    "Corruption/Bribery",
  ];

  const subTypeOptions = [
    "Medical Assistance",
    "Security",
    "Divyangjan Facilities",
    "Facilities for Women with Special Needs",
    "Electric Equipment",
    "Coach-Cleanliness",
    "Punctuality",
    "Water Availablitity",
    "Coach Maintanance",
    "Catering & Vending Service",
    "Staff Behaviour",
    "Bed Roll",
    "Corruption/Bribery",
  ];

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          // height: "100vh",
          placeItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "650px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, ml: 3 }}
          >
            <Grid container spacing={2} item xs={12} sm={12}>
              <Grid container item xs={12} sm={12}>
                <Grid item xs={12} sm={8}>
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{ color: "#75002b", fontWeight: "bold" }}
                  >
                    Grievance Detail
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ color: "black", fontWeight: "bold" }}>
                    <span className="text-red-600">*</span>
                    Mandatory Fields
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ marginY: 2 }} />
              </Grid>

              <Grid container item sx={12} sm={12} spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ color: "#878987" }}>
                    Type
                    <span className="text-red-800">*</span>
                  </Typography>
                  <Autocomplete
                    options={grievanceOptions}
                    getOptionLabel={(option) => option}
                    onChange={(event, newValue) => {
                      setGrievance(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="--select--"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ color: "#878987" }}>
                    Sub Type
                    <span className="text-red-800">*</span>
                  </Typography>
                  <Autocomplete
                    options={subTypeOptions}
                    getOptionLabel={(option) => option}
                    value={subType}
                    onChange={(event, newValue) => {
                      setSubType(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} variant="outlined" fullWidth />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container item sx={12} sm={12} spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ color: "#878987" }}>
                    Incident Date
                    <span className="text-red-800">*</span>
                  </Typography>
                  <TextField
                    type="date"
                    variant="outlined"
                    fullWidth
                    value={incidentDate}
                    onChange={(event) => setIncidentDate(event.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container item sx={12} sm={12} spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ color: "#878987" }}>
                    Upload File
                    <span className="text-red-800">*</span>
                  </Typography>
                  <TextField
                    type="file"
                    variant="outlined"
                    fullWidth
                    onChange={(event) => setFile(event.target.files[0])}
                  />
                </Grid>
                <Grid container item xs={12} sm={12} spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={{ color: "#878987" }}>
                      Mobile No.
                    </Typography>
                    <OutlinedInput
                      name="mobileNumber"
                      type="number"
                      required
                      onChange={(event) => {
                        setMobileNumber(event.target.value);
                      }}
                      fullWidth
                      id="mobileNumber"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    container
                    alignItems="center"
                    sx={{ marginTop: "5px" }}
                    fullWidth
                  >
                    <Button sx={{ backgroundColor: "#75002b", color: "white" }}>
                      Get OTP
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
