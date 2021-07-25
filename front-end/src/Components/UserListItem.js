function UserListItem({ usernames }) {
  //   console.log(usernames[usernames.length - 1]["username"]);
  if (usernames.length === 0) {
    usernames.push(0);
  }
  console.log("Username", usernames);
  const currentUser = usernames[usernames.length - 1]["username"];

  return (
    <h2 className="user-details">
      {/* {currentUser} */}

      {/* {usernames.filter((username) => {
        return username;
      })} */}

      {currentUser ? currentUser : null}
    </h2>
  );
}

export default UserListItem;
