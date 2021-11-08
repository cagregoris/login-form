import React, { useState } from 'react';
import LoginForm from './components/LoginForm'

function App() {

  // This is what we will check our login details against. This should be a database on another server.
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details)

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged In!");
      setUser({
        email: details.email
      })
    } else {
      console.log("Details do not match!")
      setError("Details do not match!")
    }
  }

  const Logout = () => {
    setUser({email: ""});
  }

  return (
    <div className="App">
      {/* Ternary operator useing jsx */}
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.email}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        // Pass login function to component because we will need to call it from inside our form once we subit
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
