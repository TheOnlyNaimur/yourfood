import React from "react";

export default function Carosal() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success txt-white " type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="../Images/Bl1.jpg"
              className="Bl1-block w-100 h-50"
              alt="..."
              style={{filter: "brightness(80%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="../Images/Bl5.jpg"
              className="d-block w-100 h-50"
              alt="..."
              style={{filter: "brightness(80%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="../Images/Bl3.jpg"
              className="d-block w-100 h-50"
              alt="..."
              style={{filter: "brightness(80%)"}}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
