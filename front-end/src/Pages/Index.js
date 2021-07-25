import ShirtsList from "../Components/ShirtsList";
import Username from "../Components/Username";

function Index({currentUser}) {
  return (
    <main className="Index">
      <h2>Fall Collection 2021</h2>
      <Username currentUser={currentUser}/>
      <ShirtsList />
    </main>
  );
}

export default Index;
