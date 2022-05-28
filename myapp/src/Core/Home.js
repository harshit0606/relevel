import React from "react";
import Carousel from "../components/Carousel/Carousel";
import imagee from "../Assets/image.jpg";
import image2 from "../Assets/A.png";
import Choice from "../Assets/Mandible Guide Flange.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../components/home/home.css";
import "../Quiz/Start.css";
import "../App.css";
import Header from "../components/header/header";
import Footer from "../components/Footer/Footer";
import Points from "../components/Points";

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
        <div className="factors">
        <h2>Factors affecting selection of Appliance</h2>
        <img src={image2} />
    </div>
      </div>
      <Points/>
      <div className="quiz-div">
        <Link className="linkk" to="/quiz">
          <button className="start-btn effect">Click here for prosthetic guide</button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}

export default home;
