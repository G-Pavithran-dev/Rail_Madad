import "./App.css";
import ViewComplaints from "./components/viewComplaint/viewComplaints";
import JourneyDetails from "./components/journeyDetails/JourneyDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Complaint from "./components/complaintFeatures/Complaint";
import ComplaintByImage from "./components/complaintFeatures/ComplaintByImage";
import TrainGrievances from "./components/Train/TrainGrievance";
import StationGrievances from "./components/Station/StationGrievances";
import Enquiry from "./components/enquiry/Enquiry";
import Suggestions from "./components/suggestions/Suggestions";
import Appreciation from "./components/appreciation/appreciation";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/complaintbyimage" element={<ComplaintByImage />} />
        <Route path="/viewComplaints" element={<ViewComplaints />} />
        <Route path="/Manualcomplaint" element={<JourneyDetails />} />
        <Route path="/train" element={<TrainGrievances />} />
        <Route path="/station" element={<StationGrievances />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/appreciation" element={<Appreciation />} />
      </Routes>
    </Router>
  );
}

export default App;
