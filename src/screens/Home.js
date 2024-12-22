import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carosal from "../components/Carosal";

export default function Home() {
  // const [search, setSearch] = useState('');
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
                // console.log(data.Name) // Check the console to see the data
            } else {
                console.error('Failed to load data:');
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
      <Carosal />
      <div className="container">


        {
        // foodCat.length > 0 ? foodCat.map((data, index) => (
        //   <div key={index}>{data.CategoryName}</div>
        // )) : <div>No categories available</div>

        foodCat.length > 0 ? foodCat.map((data) => {
          return ( 
            <>
            <div className='flex flex-wrap gap-4'>
            <div key={data._id}>
              <div className='fs-3  m-3'>{data.CategoryName}</div>
              <hr />
              {/* <div className='flex flex-wrap gap-4'> */}
              {foodItems.length > 0 ? foodItems.filter((item) => item.CategoryName === data.CategoryName).map(filterItems => {
                return (
                  <div key={filterItems._id}> 
                    <Cards />
                  </div>
                )
              }) : <div>No items available</div>}
            </div></div> </>
          )
        }) : <div>No categories available</div>
        
        
        
        
        
        }

        <Cards />
      </div>
      <Footer />
    </div>
  );
}



