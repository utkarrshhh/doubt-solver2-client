// show all the requests

import React, { useEffect, useState } from "react";
import "./SolveRequests.css";
import axios from "axios";

/*
1. Fetch all requests
2. When clicked 'accept', send data to backend
3. if response status = true
4. navigate to /chat
*/

const SolveRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // 1
    let data = {};

    const getAllRequests = async () => {
      const response = await axios.get("http://localhost:5000/api/getRequests");
      data = response.data;

      console.log(response.data);
      setRequests(data.requests);
    };

    try {
      getAllRequests();
    } catch (error) {
      console.log("error: ", error);
    }
  }, []);

  const handleAcceptRequest = () => {
    // logic to accept connection and navigate to /chat
  };
  return (
    <div className="popup">
      {requests.map((request) => (
        <div key={request.id}>
          <div className="question-container">
            <div className="image-container">
              <img src={request.image} alt="Question" />
            </div>
            <div className="content-container">
              <h3>{request.title}</h3>
              <p>{request.description}</p>
            </div>
            <div className="user-container">
              <p>
                Asker: {request.name}
                <span> @{request.username}</span>
              </p>
              <button style={{ background: "#4681f4" }}>Accept Doubt</button>
            </div>
          </div>
          <hr className="hr" />
        </div>
      ))}
    </div>
  );
};

export default SolveRequests;
