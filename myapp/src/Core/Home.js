import React from "react";
import Header from "../components/header/header";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";
import "../Quiz/Start.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="home1">
        <p>
          The <span>(Name of Website)</span> is an initiative by{" "}
          <span>(Name)</span>
          for healping the prosthodontist masiophenial prothitician and dental
          practitioner for understanding the sequential treatment line for
          patient with partial menditile resection
        </p>
      </div>
      <div className="home2">
        <h1>The Platform will help you to overcome:</h1>
        <p>The dilema of selection appliance type for specific case</p>
      </div>
      <div className="quiz-div">
        <Link className="linkk" to="/quiz">
          <button className="start-btn effect">Start Quiz</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
