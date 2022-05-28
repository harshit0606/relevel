import React from "react";
import "./Points.css";

const Points = () => {
  return (
    <div className="points-main">
      <div className="points-main-sub">
        <div className="points-text">
          <p>
            1) Maxillo-mandible fixation to reduce deviation post mandible
            resection should only be used when there is minimal soft tissue loss
            secondary to tumor ablation.
          </p>
          <p>
            2) The earlier mandible guidance therapy initiated, the more
            successful the result.{" "}
          </p>
          <p>3) If teeth are not present guidance is not effective</p>
          <p>
            6) Guidance prosthesis- interim basis-until acceptable occlusal
            relation is established{" "}
          </p>
          <p>
            4) If mandible can be manipulated into acceptable maxillomandible
            relationship with lack of motor control to maintain that= Mandible
            guide flange{" "}
          </p>
          <p>
            5) Ramp and flange part preferred to be of acrylic because of
            periodic adjustments
          </p>
          <p>
            {" "}
            6) Conditions with more deviation=Maxillary palatal ramp( as more
            stable and more adjustments can be made){" "}
          </p>
          <p>
            7) Anterior mandible resection cases with reconstruction are
            difficult to rehabilitate due to muscle pull.
          </p>
        </div>
        <div className="points-image">
          <img
            src="https://www.mytotaldentistry.com/wp-content/uploads/cosmetic-dentistry-N2003.jpg"
            alt=""
            className="image-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Points;
