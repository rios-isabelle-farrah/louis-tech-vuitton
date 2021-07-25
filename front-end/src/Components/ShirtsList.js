//Dependencies

import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import ShirtListItem from "./ShirtListItem";
import { DropdownButton, Dropdown } from "react-bootstrap";

import "./ShirtsList.css";

const API = apiURL();

function ShirtsList() {
  const [shirts, setShirts] = useState([]);
  const [showColor, setShowColor] = useState([]);

  const [currentColor, setCurrentColor] = useState("ALL");

  let optionsArray = [];

  const getShirts = async () => {
    try {
      const res = await axios.get(`${API}/shirts`);
      setShirts(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };


  const handleColorPicked = (e) => {

    setCurrentColor(e);
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

      if (!newArray.includes(colors[i].toUpperCase())) {
        newArray.push(colors[i].toUpperCase());

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

  return (
    <div className="Shirts">
      <DropdownButton

        onSelect={handleColorPicked}

        title="Filter Color"
        variant="dark"
        className="drop-down"
      >

        <Dropdown.Item eventKey="ALL">All</Dropdown.Item>

        {showColor.map((option, i) => {
          return (
            <Dropdown.Item key={i} eventKey={option} variant="dark">
              {option}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>

      <section>
        <ul className="ul-shirts">
          {shirts.map((shirt) => {
            if (
              shirt.color.toLowerCase() === currentColor.toLowerCase() ||
              currentColor === "ALL"

            ) {
              return (
                <li key={shirt.id} className="shirt-box">
                  {" "}
                  <ShirtListItem className="inside-box" shirt={shirt} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </section>
    </div>
  );
}

export default ShirtsList;

