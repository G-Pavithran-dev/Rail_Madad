// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";

// import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
// import { OutlinedInput } from "@mui/material";

export default function Suggestions() {
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
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Mobile Number:", mobileNumber);
    console.log("Grievance:", grievance);
    console.log("Description:", description);
  };

  const handleReset = () => {
    setMobileNumber("");
    setGrievance("");
    setDescription("");
  };

  const grievanceOptions = [
    "New Train",
    "New Stoppage",
    "Passenger Amenities",
    "Freight Services",
    "High Speed Rail Travel",
    "Infusing Technology",
    "Reducing carbon FootPrint",
    "Others",
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
        {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square> */}
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
                    Suggestions Detail
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ color: "black", fontWeight: "bold" }}>
                    <span className="text-red-600">*</span>
                    Mandatory Fields
                  </Typography>
                </Grid>
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
              </Grid>

              <Grid container item sx={12} sm={12} spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography sx={{ color: "#878987" }}>
                    Description
                    <span className="text-red-800">*</span>
                  </Typography>
                  <TextField
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container item sx={12} sm={12} spacing={2}>
                <Grid item xs={12} sm={8}></Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#75002b" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#cccccc" }}
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      {/* </Grid> */}
    </ThemeProvider>
  );
}
