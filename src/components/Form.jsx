import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ surveyData }) => {
  let [count, setCount] = useState(0);

  const navigate = useNavigate();

  const handleCLick = () => {
    if (count < surveyData.length - 1) {
      setCount(count + 1);
    } else {
      navigate("/result");
      return alert("Thak You! Your survey ends here...");
    }
  };

  useState(() => {}, [count]);

  return (
    <div className="home-bg">
      <div className="container form-container">
        {surveyData.length > 0 ? (
          <div className="col-8 border shadow text-center mt-4 p-4 form">
            <div className="question">
              <p>{surveyData[count]?.question}</p>
            </div>
            <div className="category">
              <h3>Category : </h3>
              <span style={{ marginLeft: "10px" }}>
                {surveyData[count]?.category}
              </span>
            </div>
            <div className="subcategory font-bold">
              <h3>subcategory : </h3>
              <button className="btn btn-warning m-2" onClick={handleCLick}>
                {" "}
                {surveyData[count]?.subcategory1}
              </button>
              <button className="btn btn-warning m-2" onClick={handleCLick}>
                {surveyData[count]?.subcategory2}
              </button>
              <button className="btn btn-warning m-2" onClick={handleCLick}>
                {surveyData[count]?.subcategory3}
              </button>
              <button className="btn btn-warning m-2" onClick={handleCLick}>
                {surveyData[count]?.subcategory4}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Form;
