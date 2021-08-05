import UserListItem from "./UserListItem";

function Username({ currentUser }) {
  return (
    <div className="usernames">
      <section>
        <UserListItem currentUser={currentUser} />
      </section>
    </div>
  );
}

export default Username;
