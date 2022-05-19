import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [fname, setFname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");

  const navigate = useNavigate();

  const element = document.querySelector(".svg-container");
  if (element) {
    element.remove();
  }

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMailMessage("");
    } else if (!regEx.test(email) && email !== "") {
      setMailMessage("Email is Not Valid");
    } else {
      setMailMessage("");
    }
  };
  const phoneValidation = () => {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    if (regex.test(phoneNum)) {
      setPhoneMessage("");
    } else if (!regex.test(phoneNum) && phoneNum !== "") {
      setPhoneMessage("Phone Number is Not Valid");
    } else {
      setPhoneMessage("");
    }
  };

  const passValidation = () => {
    setPassMessage("");
    if (pass !== confPass) {
      setPassMessage("Password not matching");
      console.log(passMessage);
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhoneNum(e.target.value);
  };
  const passChangeHandler = (e) => {
    setPass(e.target.value);
  };
  const confPassChangeHandler = (e) => {
    setConfPass(e.target.value);
  };
  const clickHandler = () => {
    emailValidation();
    phoneValidation();
    passValidation();
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (passMessage || phoneMessage || mailMessage) {
      return;
    }
    navigate("/chart");
  };

  return (
    <div className="container-flex">
      <div>
        <img src="/assignment.png" alt="dashboard" />
      </div>
      <div>
        <h1>Create an Account</h1>
        <form onSubmit={submitHandler}>
          <div>
            <div>
              <label htmlFor="emaild"> Your Email Address</label>
            </div>
            <input
              type="text"
              id="emaild"
              onChange={handleOnChange}
              value={email}
              required={true}
              className="text-box"
            />
          </div>
          <p className="error">{mailMessage}</p>

          <div>
            <div>
              <label htmlFor="pass"> Your Password</label>
            </div>
            <input
              type="password"
              id="pass"
              value={pass}
              onChange={passChangeHandler}
              required={true}
              className="text-box"
            />
          </div>
          <div>
            <div>
              <label htmlFor="confPass"> Confirm Your Password</label>
            </div>
            <input
              type="password"
              id="confPass"
              value={confPass}
              onChange={confPassChangeHandler}
              required={true}
              className="text-box"
            />
          </div>
          <p className="error">{passMessage}</p>
          <div>
            <div>
              <label htmlFor="fullName"> Your full Name</label>
            </div>
            <input type="text" id="fullName" className="text-box" />
          </div>
          <div>
            <div>
              <label htmlFor="phone"> Your Phone Number</label>
            </div>
            <input
              type="tel"
              id="phone"
              value={phoneNum}
              onChange={phoneChangeHandler}
              required={true}
              className="text-box"
            />
          </div>
          <p className="error">{phoneMessage}</p>
          <button className="btn-main" onClick={clickHandler}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
