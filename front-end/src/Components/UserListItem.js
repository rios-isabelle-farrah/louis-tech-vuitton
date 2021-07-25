function UserListItem({ currentUser }) {

  return (
    <h2 className="user-details">
      {currentUser}
    </h2>
  );
}

export default UserListItem;
