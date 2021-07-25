import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import UserListItem from "./UserListItem";

const API = apiURL();

function Username({currentUser}) {
  const [usernames, setUsernames] = useState([]);

  const getUsernames = async () => {
    try {
      const res = await axios.get(`${API}/users`);
      setUsernames(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsernames();
  }, []);

  return (
    <div className="usernames">
      <section>
        <UserListItem currentUser={currentUser} />
      </section>
    </div>
  );
}

export default Username;
