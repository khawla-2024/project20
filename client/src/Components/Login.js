import { Container } from "reactstrap";
import chef from "../Images/chef.png";
import { useEffect, useState } from "react";
import { loginSchemaValidation } from "../Validations/LoginValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from "../Images/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user"); // State for dropdown selection
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
      email,
      password,
    };
    dispatch(login(userData));

    // Redirect based on user type selection
    if (userType === "user") {
      navigate("/");
    } else if (userType === "admin") {
      navigate("/manage");
    }
  };

  useEffect(() => {
    if (isLogin) {
      // Redirect user after login success
      if (userType === "user") {
        navigate("/");
      } else if (userType === "admin") {
        navigate("/manage");
      }
    }
  }, [isLogin, navigate, userType]);

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className="bg-white p-4 rounded shadow" style={{ maxWidth: "750px" }}>
        <div className="logo-container text-center mb-4">
          <img src={chef} alt="Chef Logo" className="logo" style={{ width: "150px", height: "auto" }} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="div-form w-100">
          {/* User Type Dropdown */}
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="userType" style={{ fontSize: "16px" }}>Login As</label>
            <select
              id="userType"
              className="form-control"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Email Input */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email..."
              {...register("email", {
                onChange: (e) => setEmail(e.target.value),
              })}
            />
            <p className="error">{errors.email?.message}</p>
          </div>

          {/* Password Input */}
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              {...register("password", {
                onChange: (e) => setPassword(e.target.value),
              })}
            />
            <p className="error">{errors.password?.message}</p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Sign In
          </button>
        </form>

        {/* Error Message */}
        {msg && <div className="error-msg text-center mt-3">{msg}</div>}

        {/* Sign Up Link */}
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