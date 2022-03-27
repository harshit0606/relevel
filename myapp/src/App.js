import React from 'react'
import "./App.css";
import Header from "./components/header/header";
import Carousel from "./components/Carousel/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
        <Header/>
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
    </div>
  )
}

export default App