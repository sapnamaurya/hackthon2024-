import React from "react";
import "./style.css";
import dietImg from "../../assets/images/diet.jpg";
import exerciseImg from "../../assets/images/exercise.jpg";
import motivationImg from "../../assets/images/motivation.jpg";
import membershipImg from "../../assets/images/membership.jpg";
import reportImg from "../../assets/images/report.jpg";
import { useNavigate } from "react-router-dom";
const Service = () => {
  const navigate = useNavigate();
  const handleMotivation = () => {
    navigate("/motivation");
  };
  const handleReport = () => {
    navigate("/report");
  };
  const handleDiet = () => {
    navigate("/diet");
  };
  const handleExercise = () => {
    navigate("/exercise");
  };
  const handleMembership = () => {
    navigate("/membership");
  };

  return (
    <div>
      <div className="service-section">
        <h2 className="page-header">Services</h2>
        <div className="service-container">
          <div
            className="page-card"
            id="report"
            style={{ backgroundImage: `url(${reportImg})` }}
          >
            <div className="page-number page-number-left">01</div>
            <div className="page-content page-content-left">
              <h2 className="page-heading">Report Analysis</h2>
              <p className="page-sub-heading">It is report analysis page.</p>
              <div className="btn-group">
                <button className="btn-pink btn-project" onClick={handleReport}>
                  Goto
                </button>
              </div>
            </div>
          </div>

          <div
            className="page-card"
            id="diet"
            style={{ backgroundImage: `url(${dietImg})` }}
          >
            <div className="page-number page-number-left">02</div>
            <div className="page-content page-content-left">
              <h2 className="page-heading">Pre/Post Workout Diet</h2>
              <p className="page-sub-heading">It is diet plan page.</p>
              <div className="btn-group">
                <button className="btn-pink btn-project" onClick={handleDiet}>
                  Goto
                </button>
              </div>
            </div>
          </div>

          <div
            className="page-card"
            id="exercise"
            style={{ backgroundImage: `url(${exerciseImg})` }}
          >
            <div className="page-number page-number-left">03</div>
            <div className="page-content page-content-left">
              <h2 className="page-heading">Exercises</h2>
              <p className="page-sub-heading">It is exercise videos page.</p>
              <div className="btn-group">
                <button
                  className="btn-pink btn-project"
                  onClick={handleExercise}
                >
                  Goto
                </button>
              </div>
            </div>
          </div>

          <div
            className="page-card"
            id="motivational"
            style={{ backgroundImage: `url(${motivationImg})` }}
          >
            <div className="page-number page-number-left">04</div>
            <div className="page-content page-content-left">
              <h2 className="page-heading">Motivational site</h2>
              <p className="page-sub-heading">It is motivational page.</p>
              <div className="btn-group">
                <button
                  className="btn-pink btn-project"
                  onClick={handleMotivation}
                >
                  Goto
                </button>
              </div>
            </div>
          </div>

          <div
            className="page-card"
            id="membership"
            style={{
              backgroundImage: `url(${membershipImg})`,
            }}
          >
            <div className="page-number page-number-left">05</div>
            <div className="page-content page-content-left">
              <h2 className="page-heading">Membership</h2>
              <p className="page-sub-heading">It is membership page.</p>
              <div className="btn-group">
                <button
                  className="btn-pink btn-project"
                  onClick={handleMembership}
                >
                  Goto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
