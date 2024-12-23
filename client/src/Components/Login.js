import { Container, Row, Col } from "reactstrap"; 
import chef from "../Images/chef.png";
import { useEffect, useState } from "react";
import { loginSchemaValidation } from "../Validations/LoginValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useNavigate, Link } from "react-router-dom"; // Import Link for routing
import backgroundImage from '../Images/login.jpg'; // Import the background image

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { msg, isLogin, user } = useSelector((state) => state.users);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchemaValidation),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    const userData = {
      email: email,
      password: password,
    };
    dispatch(login(userData));
    navigate("/");
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLogin, user, navigate]);

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Apply background image dynamically
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', // Make sure it covers the full height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container className="bg-white p-4 rounded shadow" style={{ maxWidth: "750px" }}>
        <div className="logo-container text-center mb-4">
          <img src={chef} alt="chef" className="logo" style={{ width: '150px', height: 'auto' }} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="div-form w-100">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email..."
              {...register("email", {
                onChange: (e) => setemail(e.target.value),
              })}
            />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              {...register("password", {
                onChange: (e) => setpassword(e.target.value),
              })}
            />
            <p className="error">{errors.password?.message}</p>
          </div>

          <button type="submit" color="primary" className="button w-100 mt-3">
            Sign In
          </button>
        </form>
        {msg && <div className="error-msg text-center mt-3">{msg}</div>}

        {/* Sign up link */}
        <div className="text-center mt-4">
          <p>
            Not a member?{" "}
            <Link to="/register" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;


