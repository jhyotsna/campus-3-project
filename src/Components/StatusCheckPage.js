import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const StatusCheckPage = (props) => {
  const stepsData = ["HOD", "IT Infra", "Dean Academics", "Administrative Officer"];
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep < stepsData.length ? prevStep + 1 : prevStep));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    width: "90%",
    maxWidth: "800px",
    margin: "40px auto",
    marginTop:"30vh",
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const headlineStyle = {
    textAlign: "center",
    color: "brown",
    fontWeight: "bold",
    marginBottom: "30px",
  };

  const progressContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    margin: "20px 0",
  };

  const progressBarStyle = {
    content: '""',
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: "4px",
    backgroundColor: "#e0e0e0",
    zIndex: 1,
    transform: "translateY(-50%)",
  };

  const stepStyle = {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  const circleStyle = (status) => ({
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: status === "active" ? "green" : status === "complete" ? "brown" : "#e0e0e0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
  });

  const labelStyle = {
    marginTop: "10px",
    fontSize: "14px",
    textAlign: "center",
    color: "#333",
  };

  return (
    <>
    <Header name={props.headername}/>
    <div style={containerStyle}>
      <h1 style={headlineStyle}>Status Tracker</h1>
      <div style={progressContainerStyle}>
        <div style={progressBarStyle}></div>
        {stepsData.map((step, index) => {
          const status = index < currentStep ? "complete" : index === currentStep ? "active" : "";
          return (
            <div key={index} style={stepStyle}>
              <div style={circleStyle(status)}>{index + 1}</div>
              <div style={labelStyle}>{step}</div>
            </div>
          );
        })}
      </div>
    </div>
    <Footer previouspath={props.previouspath}/>
    </>
  );
};

export default StatusCheckPage;
