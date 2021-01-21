import './Auth.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Authetication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    var emailfromLocalStorage = localStorage.getItem("Email");
    var passwordfromLocalStorage = localStorage.getItem("Password");
    if (email === emailfromLocalStorage && password === passwordfromLocalStorage) {
      history.push('/tasks');
    } else {
      setError("Vérifier votre email ou votre mot de passe")
    }
  }

  return (
    <div style={{ width: "41%", margin: "0 auto", marginTop: "100px" }}>
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div style={{color:"red",textAlign:'center'}}>{error}</div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            className="form-control"
            placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            className="form-control"
            placeholder="Enter password" />
        </div>

        {/* <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
          </div>
        </div> */}

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  );
}

export default Authetication;
