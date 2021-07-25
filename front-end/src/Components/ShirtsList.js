import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import ShirtListItem from "./ShirtListItem";

import "./ShirtsList.css";

const API = apiURL();

function ShirtsList() {
  const [shirts, setShirts] = useState([]);
  const [showColor, setShowColor] = useState([]);
  const [currentColor, setCurrentColor] = useState("All");
  // const [filteredShirts, setFilteredShirts] = useState([]);
  let optionsArray = [];

  const getShirts = async () => {
    try {
      const res = await axios.get(`${API}/shirts`);
      setShirts(res.data.payload);
      // setFilteredShirts(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  const filterColor = (e) => {
    // let filArr = [];
    setCurrentColor(e.target.value)
    // if (e.target.value === "All") {
    //   filArr = shirts;
    // } else {
    //   // debugger;
    //   shirts.forEach((shirt) => {
    //     // debugger
    //     if (shirt.color.toLowerCase() === e.target.value.toLowerCase()) {
    //       filArr.push(shirt);
    //       // debugger
    //     }
    //   });
    //   // debugger;
    // }
    // setFilteredShirts(filArr);
  };

  const createColorOptions = () => {
    for (let i = 0; i < shirts.length; i++) {
      optionsArray.push(shirts[i].color);
    }
    optionsArray = removeDups(optionsArray);
    setShowColor(optionsArray);
  };

  const removeDups = (colors) => {
    let newArray = [];
    for (let i = 0; i < colors.length; i++) {
      if (!newArray.includes(colors[i])) {
        newArray.push(colors[i]);
      }
    }
    return newArray;
  };

  useEffect(() => {
    getShirts();
  }, []);

  useEffect(() => {
    createColorOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shirts]);

  // useEffect(() => {
  //   filterColor();
  // }, [showColor]);

  return (
    <div className="Shirts">
      <select onChange={filterColor}>
        <option value="All">All</option>
        {showColor.map((option,i) => {
          return <option key={i} value={option}>{option}</option>;
        })}
      </select>
      <section>
        <ul className="ul-shirts">
          {shirts.map((shirt) => {
            if(shirt.color.toLowerCase() === currentColor.toLowerCase() || currentColor === "All"){
              return (
                <li key={shirt.id} className="shirt-box">
                  {" "}
                  <ShirtListItem className="inside-box" shirt={shirt} />
                </li>
              );
            }else{
              return null;
            }
          })}
        </ul>
      </section>
    </div>
  );
}

export default ShirtsList;
