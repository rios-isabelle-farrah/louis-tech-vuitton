import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import ShirtListItem from "./ShirtListItem";
// 

import "./ShirtsList.css";

const API = apiURL();

function ShirtsList() {
  const [shirts, setShirts] = useState([]);

  const getShirts = async () => {
    try {
      const res = await axios.get(`${API}/shirts`);
      setShirts(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getShirts();
  }, []);

  return (
    <div className="Shirts">
      <section>
        <ul className="ul-shirts">
          {shirts.map((shirt) => {
            return (
              <li className="shirt-box">
                {" "}
                <ShirtListItem
                  className="inside-box"
                  key={shirt.id}
                  shirt={shirt}
                />
              </li>
            );
          })}
        </ul>

        {/* </tbody>
        </table> */}
      </section>
    </div>
  );
}

export default ShirtsList;
