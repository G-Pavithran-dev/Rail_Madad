import Navbar from "../navbar/Navbar";
import Dashboard from "../dashboard/Dashboard";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/people-watching-as-train-approaches_1353-227.jpg?t=st=1725211896~exp=1725215496~hmac=9d8a19baaaa6e4b97fa0d9844cb642df8d8e6dd63e56b34ff0cc09584b97bd8a&w=996')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default HomePage;
