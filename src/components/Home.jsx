// Home.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Home.css";
import Ask from "./Ask/Ask";
import FindPeers from "./FindPeers/FindPeers";
import SolveRequests from "./SolveRequests/SolveRequests";

const Home = ({ username, onLogout }) => {
  const [showPopupAsk, setShowPopupAsk] = useState(false);
  const [showPopupFindPeer, setShowPopupFindPeer] = useState(false);
  const [showPopupSolve, setShowPopupSolve] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const [questionID, setQuestionID] = useState(0);

  const togglePopupAsk = () => {
    // console.log("Toggled  togglePopupAsk")
    setShowLoader(false);
    setShowPopupFindPeer(false);
    setShowPopupSolve(false);
    setShowPopupAsk(!showPopupAsk);
    // setShowLoader(!showLoader)
  };

  const togglePopupFindPeer = () => {
    // console.log("Toggled ")
    setShowLoader(false);
    setShowPopupSolve(false);
    setShowPopupAsk(false);
    setShowPopupFindPeer(!showPopupFindPeer);
  };

  const togglePopupSolve = () => {
    // console.log("Toggled solve")
    setShowPopupFindPeer(false);
    setShowLoader(false);
    setShowPopupAsk(false);
    setShowPopupSolve(!showPopupSolve);
  };

  const toggleLoader = () => {
    setShowLoader(!showLoader);
  };
  return (
    <div className="hero">
      {/* <Navbar loggedIn={true} onLogout={onLogout} /> */}
      <div className="left-parent">
        <div
          className="img"
          style={{ height: "79%", width: "60%", objectFit: "contain" }}
        >
          <img src="../../public/images/groupstudy.png" alt="tutor" />
        </div>
        <div className="home-texts-box">
          <h1 className="home-title-left">Get your answers Instantly</h1>
          <h3 style={{ color: "white" }}>
            Get 24x7 hours help from our experts.Ask doubts anytime, anywhere
          </h3>
        </div>
      </div>
      <div className="right-parent">
        <button
          className="button-divs-left"
          onClick={togglePopupAsk}
          style={{
            backgroundImage: "url('../../public/images/confused2.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // backgroundAttachment: "fixed",
          }}
        >
          <p style={{ fontSize: "20px" }}>Confused? Ask your doubts here!.</p>
          <h3>Ask</h3>
        </button>
        {showPopupAsk && (
          <Ask
            togglePopupAsk={togglePopupAsk}
            togglePopupFindPeer={togglePopupFindPeer}
            togglePopupSolve={togglePopupSolve}
            questionID={questionID}
            setQuestionID={setQuestionID}
          />
        )}
        {showPopupFindPeer && (
          <FindPeers
            togglePopupAsk={togglePopupAsk}
            togglePopupFindPeer={togglePopupFindPeer}
            togglePopupSolve={togglePopupSolve}
            questionID={questionID}
            username={username}
          />
        )}
        {showPopupSolve && (
          <SolveRequests
            togglePopupAsk={togglePopupAsk}
            togglePopupFindPeer={togglePopupFindPeer}
            togglePopupSolve={togglePopupSolve}
          />
        )}

        <button
          className="button-divs-left"
          onClick={togglePopupSolve}
          style={{
            backgroundImage: "url('../../public/images/smart.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // backgroundAttachment: "fixed",
          }}
        >
          <p style={{ fontSize: "20px" }}>Check for New Doubts here!</p>
          <h3>Solve</h3>
        </button>

        <button
          className="button-divs-left"
          style={{
            backgroundImage: "url('../../public/images/dashboard2.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // backgroundAttachment: "fixed",
          }}
        >
          <h3>Dashboard</h3>
          <p>Some Desc.</p>
        </button>

        <div className="">
          {/* <p>Welcome, {username}!</p> */}
          {/* <button onClick={onLogout}>Logout</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
