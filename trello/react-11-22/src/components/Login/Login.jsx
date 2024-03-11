import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiEmail } from "../../redux/slice/LoginSlice";
import Trello from "../Trello/Trello";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(
    localStorage.getItem("apiKey") ? localStorage.getItem("apiKey") : null
  );

  const { loading } = useSelector((state) => state.login);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispath(getApiEmail(email));
  //     // reset input
  //     setEmail("");
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailUser = e.target.email.value;
    console.log(emailUser);
    dispatch(getApiEmail(emailUser, dispatch)).then(() =>
      setEmail(localStorage.getItem("apiKey"))
    );
  };

  return (
    <>
      {email !== null ? (
        <Trello />
      ) : (
        // console.log("oke")
        <div className="container">
          <form onSubmit={handleSubmit}>
            {loading ? <h2>Loading</h2> : <h2>Enter the Email:</h2>}
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@gmail.com"
                // value={email}
                // onChange={handleChangeEmail}
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
