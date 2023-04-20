import React, { useState } from "react";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [addSurveyData, setAddSurveyData] = useState({
    category: "",
    subcategory1: "",
    subcategory2: "",
    subcategory3: "",
    subcategory4: "",
    question: "",
  });

  const handleChange = (e) => {
    setAddSurveyData({ ...addSurveyData, [e.target.name]: e.target.value });
  };

  const handleAddData = async (e) => {
    e.preventDefault();
    if (
      !addSurveyData.question ||
      !addSurveyData.category ||
      !addSurveyData.subcategory1
    ) {
      return alert("question, category and subcategoy one is mandatory.");
    }
    fetch("https://travel-server-twat.onrender.com/api/serveyData", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addSurveyData),
    }).then((response) => {
      setAddSurveyData({
        category: "",
        subcategory1: "",
        subcategory2: "",
        subcategory3: "",
        subcategory4: "",
        question: "",
      });
    });
  };

  const authPerson = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {authPerson === null ? (
        <div className="text-center container my-4 p-4">
          <div
            style={{
              marginBottom: "75vh",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Please login first or signup...
            <br />
            <button
              className="btn btn-success my-4"
              onClick={() => navigate("/login")}
            >
              {" "}
              Go To Login / sign-up{" "}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="container col-12 border shadow p-4 my-4"
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
            }}
          >
            <div className="info">
              <p>name : {authPerson?.name}</p>
              <p>email : {authPerson?.email}</p>
              <p>role : {authPerson?.role}</p>
            </div>
            <div className="text-center">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.uE6Us0z5TPffZTS-yg8YvgAAAA&pid=Api&P=0"
                alt=""
                style={{ height: "100px" }}
              />
            </div>
          </div>

          <hr className="line" />

          {authPerson?.role !== "user" ? <UserList /> : ""}

          {authPerson.role === "admin" ? (
            <div className="addData container border shadow mb-4">
              <div className="container my-4 py-4">
                <h2>Add survey data : </h2>
              </div>
              <div className="container border shadow col-8 text-center mt-4 mb-4  p-4 bg-light">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Add Question</label>
                    <input
                      type="text"
                      className="form-control"
                      name="question"
                      value={addSurveyData.question}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Add Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="category"
                      value={addSurveyData.category}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      subcategory 1
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subcategory1"
                      value={addSurveyData.subcategory1}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      subcategory 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subcategory2"
                      value={addSurveyData.subcategory2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      subcategory 3
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subcategory3"
                      value={addSurveyData.subcategory3}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      subcategory 4
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subcategory4"
                      value={addSurveyData.subcategory4}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={(e) => handleAddData(e)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div style={{ marginTop: "75vh" }}></div>
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
