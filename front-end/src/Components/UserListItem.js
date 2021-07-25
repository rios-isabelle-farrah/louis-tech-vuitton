function UserListItem({ usernames }) {
  console.log(usernames);
//   console.log(usernames[usernames.length - 1]["username"]);

  return <h2 className="user-details">
      Welcome {usernames[usernames.length - 1].username} !
      </h2>;
}

export default UserListItem;
