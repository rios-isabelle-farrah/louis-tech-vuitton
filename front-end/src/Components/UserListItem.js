function UserListItem({ currentUser }) {

  return (
    <h2 className="user-details">
     {currentUser?` Welcome ${currentUser}! Glad to have you back, happy shopping!!`: null}
    </h2>
  );
}

export default UserListItem;
