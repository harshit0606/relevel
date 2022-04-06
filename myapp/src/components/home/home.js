import React from "react";
import Carousel from "../Carousel/Carousel";
import imagee from "../../Assets/image.jpg";
import Choice from "../../Assets/Mandible Guide Flange.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./home.css";
import "../Quiz/Start.css";
import "../App.css";
import Header from "../header/header";
import Footer from "../Footer/Footer";

function home() {
  return (
    <div>
    <Header/>
      <Carousel />
      <div className="home1">
        <img src={imagee} />
        <p>
          The ASDL/APG/PMPG is an initiative by a team of Prosthodontists (Dr.
          Aditi Verma, Dr. Saumyendra V. Singh, Dr. Deeksha Arya and Dr. Lakshya
          Kumar) from King George’s Medical University Lucknow for helping the
          Prosthodontists , maxillofacial Prosthodontists and dental
          practitioners to understand the sequential treatment line for patient
          with partial mandible resection.
        </p>
      </div>
      <div className="home2">
        <h1>
          The Platform will help you to overcome the dilema of selection
          appliance type for specific case
        </h1>
        <div className="image_div">
          <img src={Choice} />
        </div>
      </div>
      <div className="quiz-div">
        <Link className="linkk" to="/quiz">
          <button className="start-btn effect">Start Quiz</button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}

export default home;
