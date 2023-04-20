import React from "react";

const Result = () => {
  return (
    <div className="text-center bg-result">
      <div>
        <div className="container shadow result">
          <h1>Thank You ! for loving yourself.</h1>
          <h2>Excited ?</h2>
          <p>
            {" "}
            to get travel destination , budget friendly plans, and many more ...
          </p>
          <p>
            This survey is conducted for finding out the perfect travel
            destination based on your passion and interest and things that you
            would like or dislike.
          </p>
          <p>
            Our travel advisers are working for you to bring a best travel plan,
            once it get's ready we will get in touch with you.{" "}
          </p>
          <div className="btn btn-outline-warning">contact us for more</div>
        </div>

        <div className="cards container shadow flex">
          <div className="card m-4">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.A1bpXK9mAT5A6cNtYSXTwQHaJ4&pid=Api&P=0"
              className="card-img-top"
              alt="..."
              style={{ height: "35vh" }}
            />
            <div className="card-body">
              <h5 className="card-title">Best budget frinedly</h5>
              <p className="card-text">
                Some quick example text to build on the card title.
              </p>
            </div>
          </div>
          <div className="card m-4">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.sVhqPS5gXQEZ6qoJpkpjdgHaDI&pid=Api&P=0"
              className="card-img-top"
              alt="..."
              style={{ height: "35vh" }}
            />
            <div className="card-body">
              <h5 className="card-title">Fun with comfort</h5>
              <p className="card-text">
                Some quick example text to build on the card title.
              </p>
            </div>
          </div>
          <div className="card m-4">
            <img
              src="https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="..."
              style={{ height: "35vh" }}
            />
            <div className="card-body">
              <h5 className="card-title">Feel every heartbeat</h5>
              <p className="card-text">
                Some quick example text to build on the card title.
              </p>
            </div>
          </div>
          <div className="card m-4">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.jrFZy-uh6loL927yRNfEagHaEK&pid=Api&P=0"
              className="card-img-top"
              alt="..."
              style={{ height: "35vh" }}
            />
            <div className="card-body">
              <h5 className="card-title">Unforgotable moments</h5>
              <p className="card-text">
                Some quick example text to build on the card title.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
