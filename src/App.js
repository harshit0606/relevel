import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizMain from "./Quiz/QuizMain";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Core/Home";
function App() {
  return (
    <div>
      {/* <Header/>
        <Carousel/>
        <div className='home1'>
          <p>The <span>(Name of Website)</span> is an initiative by <span>(Name)</span>
           for healping the prosthodontist masiophenial prothitician 
            and dental practitioner for understanding the sequential
            treatment line for patient with partial menditile resection</p>
        </div>
        <div className='home2'>
        <h1>The Platform will help you to overcome:</h1>
        <p>The dilema of selection appliance  type for specific case</p>
        </div>
        <Link to="/quiz"><button>Start Quiz</button></Link>
        <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quiz" element={<QuizMain />} />
          <Route path="invoices" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
