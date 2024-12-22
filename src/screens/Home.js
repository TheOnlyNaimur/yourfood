



import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
// import Carosal from "../components/Carosal";

export default function Home() {
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItems, setFoodItems] = useState([]);

    const loadData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/foodData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();

            if (data.success) {
                setFoodCat(data.foodCategory);
                setFoodItems(data.foodItems);
                console.log(data);
            } else {
                console.error('Failed to load data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search} onChange={(e) => setSearch(e.target.value)}
              />
              {/* <button className="btn btn-outline-success txt-white " type="submit" onClick={() => console.log("Searching for:", search)}>
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="Images/fd1.jpg"
              className="Bl1-block w-100 "
              alt="..."
              style={{filter: "brightness(80%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="Images/fd2.jpg"
              className="d-block w-100 "
              alt="..."
              style={{filter: "brightness(80%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="Images/fd3.jpg"
              className="d-block w-100"
              alt="..."
              style={{filter: "brightness(80%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="Images/fd4.jpg"
              className="d-block w-100 "
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
        </button></div>



            <div className="container mt-4">
                {foodCat.length > 0 ? (
                    foodCat.map((category) => (
                        <div key={category._id} className="mb-5">
                            <div className="fs-3 mb-3">{category.CategoryName}</div>
                            <hr />
                            <div className="row">
                                {foodItems.length > 0 ? (
                                    foodItems
                                        .filter((item) => (item.CategoryName === category.CategoryName)&&(item.name.toLowerCase().includes(search.toLowerCase()))) 
                                        .map((filteredItem) => (
                                            <div
                                                key={filteredItem._id}
                                                className="col-12 col-md-6 col-lg-3 mb-4"
                                            >
                                                <Cards
                                                    foodName={filteredItem.name}
                                                    options={filteredItem.options[0]}
                                                    imgSrc={filteredItem.img}
                                                />
                                            </div>
                                        ))
                                ) : (
                                    <div>No items available</div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No categories available</div>
                )}
            </div>
            <Footer />
        </div>
    );
}
