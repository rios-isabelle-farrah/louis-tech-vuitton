import LoginForm from "../Components/LoginForm";

function Login({setCurrentUser}) {
  return (
    <main className="login">
      <h2>User Login</h2>
      <LoginForm setCurrentUser={setCurrentUser}/>
    </main>
  );
}

export default Login;