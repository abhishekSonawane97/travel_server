import React, { useEffect, useState } from "react";
import Form from "../components/Form";

const Home = () => {
  const [startSurvey, setStartSurvey] = useState(false);
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    fetch("https://travel-server-twat.onrender.com/api/serveyData")
      .then((data) => data.json())
      .then((res) => setSurveyData(res))
      .catch((err) => console.log(err));
  }, [startSurvey]);

  const handleClick = () => {
    setStartSurvey(true);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        fetch("https://travel-server-twat.onrender.com/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => setData(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [startSurvey, surveyData]);

  if (data !== "undefined") {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return (
    <div className="home-bg">
      {!startSurvey ? (
        <div className="container">
          <div className="col-8 content p-4">
            <h2>welcome {data ? data.name : ""} !!!</h2>
            <h3>We are travel guide </h3>
            <p>
              You want to go for a vacation, no worries we are here for you...
            </p>
            <p>
              you just need to conduct a sample interaction with us with the
              help of simple travel servey so we can find best and suitable
              travel plan for you.
            </p>
            <button className="btn btn-success p-2" onClick={handleClick}>
              start your survey
            </button>
          </div>
        </div>
      ) : (
        <Form surveyData={surveyData} />
      )}
    </div>
  );
};

export default Home;
