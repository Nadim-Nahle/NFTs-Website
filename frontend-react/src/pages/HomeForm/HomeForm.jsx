import React from "react";
import { useState } from "react";
import axios from "../../api/axios";
import "./HomeForm.css";
import { useNavigate } from "react-router-dom";

const ADDHOME_URL = "/addhome";
const JWT = localStorage.getItem("JWT");

const HomeForm = () => {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [catchphrase, setCatchphrase] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JWT);
    try {
      const response = await axios.post(
        ADDHOME_URL,
        { name, logo, catchphrase },
        {
          headers: { Authorization: `Bearer ${JWT}` },
        }
      );
      console.log(response);
      navigate("/aboutform");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Create the Home Page!</h2>
          <input
            type="text"
            className="field"
            placeholder="Website Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="field"
            placeholder="Website Abbreviation"
            onChange={(e) => setLogo(e.target.value)}
          />
          <textarea
            placeholder="Please Enter A Catchphrase!"
            className="field"
            onChange={(e) => setCatchphrase(e.target.value)}
          ></textarea>
          <button className="btn" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
