import React from "react";
import "./style.css"; // Import your CSS file

const Exercise = () => {
  return (
    <div>
      {/* Introduction Section */}
      <Intro />

      {/* Gallery Section */}
      <VideoGallery />

      {/* Footer Section */}
    </div>
  );
};

// Intro Component
const Intro = () => (
  <div className="intro">
    {/* Header Section */}

    {/* Body Section */}
    <div className="body">
      <div className="home">
        <h1>Exercises</h1>
      </div>
      <p>
        Welcome to our home gym exercise video page, where we're breaking free
        from the constraints of traditional gym equipment! Here, you'll discover
        a world of alternative exercises that don't require machines or
        dumbbells, perfect for those who prefer a more flexible and
        space-efficient workout routine.
      </p>

      <h2 id="head2">Why Choose Alternative Exercises?</h2>

      <h3 id="head3">Save space:</h3>
      <p>
        No need for bulky machines or dumbbells, making it ideal for home
        workouts or small spaces.
      </p>

      <h3 id="head3">Increase flexibility:</h3>
      <p>
        Alternative exercises often engage multiple muscle groups, improving
        overall flexibility and range of motion.
      </p>

      <h3 id="head3">Reduce costs:</h3>
      <p>No need to invest in expensive gym equipment or memberships.</p>

      <h3 id="head3">Enhance creativity:</h3>
      <p>
        Explore new and innovative ways to work out, keeping your routine fresh
        and exciting.
      </p>

      <h2 id="head2">What to Expect</h2>
      <p>
        A variety of exercises that cater to different fitness levels and goals.
        <br />
        Clear instructions and demonstrations to ensure proper form and
        technique.
        <br />
        A focus on bodyweight exercises, resistance bands, and other
        equipment-free alternatives.
        <br />
        Regular updates with new exercises and routines to keep your workouts
        engaging and challenging.
        <br />
      </p>
      <p>
        Join us on this journey to revolutionize your home workout routine with
        our alternative exercise videos. Get ready to sweat, stretch, and
        strengthen your body without the need for machines or dumbbells!
      </p>
    </div>
  </div>
);

// Video Gallery Component
const VideoGallery = () => {
  const videos = [
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
  ];

  return (
    <div className="containergallery">
      <h1 id="secHeading">Reference Videos</h1>
      <div className="gallery">
        {videos.map((video, index) => (
          <figure key={index} className="card">
            <iframe width="420" height="345" src={video}></iframe>
          </figure>
        ))}
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer>
    <div className="container footer-wrapper">
      <div className="footer-faded-text">Gym Home</div>
      <div className="link-wrapper">
        <div>
          <a href="#login">Log in</a>
        </div>
        <div>
          <a href="#membership">Membership</a>
        </div>
        <div>
          <a href="#contactme">Contact Me</a>
        </div>
      </div>

      <div className="icon-wrapper">
        <i className="fa-brands fa-twitter icon"></i>
        <i className="fa-brands fa-instagram icon"></i>
        <i className="fa-regular fa-envelope icon"></i>
      </div>
    </div>
  </footer>
);

export default Exercise;
