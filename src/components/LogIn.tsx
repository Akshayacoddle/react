import React from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const HandleLogin = async () => {
    let result = await fetch("http://localhost:5001/teacher/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let results = await result.json();
    console.warn(results.success);
    if (results.success === true) {
      navigate("/home");
    } else {
      alert("invalid username or password");
    }
  };

  // Invoke the function to address the unused variable warning

  return (
    <div className="container">
      <div className="header">
        <div className="text">LogIn</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input">
          <input
            type="password"
            name="pass"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button onClick={HandleLogin} type="submit">
          login
        </button>
      </div>
    </div>
  );
}
export default LogIn;
