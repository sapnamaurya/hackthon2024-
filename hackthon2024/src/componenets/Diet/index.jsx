import React from "react";
import "./style.css"; // Import the CSS file for styling

const Diet = () => {
  const plans = [
    {
      title: "Strength Training",
      image:
        "https://trainright.com/wp-content/uploads/2019/07/strength-training-squat.jpg",
      alt: "strength training",
    },
    {
      title: "Yoga",
      image:
        "https://www.sleepfoundation.org/wp-content/uploads/2021/01/yoga-outside.jpg",
      alt: "yoga",
    },
    {
      title: "Pilates",
      image: "https://unitehealth.com.au/photos/2/new_images/pilates6.jpg",
      alt: "pilates",
    },
    {
      title: "Calisthenics",
      image: "https://coahcmoisre.coachmmorris.com/1664013286592.jpg",
      alt: "calisthenics",
    },
    {
      title: "Zumba",
      image:
        "https://www.thoughtco.com/thmb/2iaRppZnx9-FN9ozY8-pPMtacd8=/2136x1403/filters:fill(auto,1)/dance-fitness-1067009516-5c81907946e0fb0001136604.jpg",
      alt: "zumba",
    },
  ];

  return (
    <div>
      <h1 className="plans">PRE/POST WORKOUT DIET</h1>
      <div className="flashcard-containers">
        {plans.map((plan, index) => (
          <div key={index} className="flashcard">
            <img src={plan.image} alt={plan.alt} />
            <div className="containers">
              <div className="text">{plan.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diet;
