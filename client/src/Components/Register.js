import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useState } from "react";
import bacground from "../Images/bacground.png";

import { userSchemaValidation } from "../Validations/UserValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user, msg } = useSelector((state) => state.users);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(registerUser(userData));
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bacground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className="bg-white p-4 rounded shadow" style={{ maxWidth: "600px" }}>
        <form className="div-form w-100" onSubmit={handleSubmit(onSubmit)}>
          <div className="appTitle text-center">
            <h4>Sign Up</h4>
          </div>
          <section>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name..."
                {...register("name", {
                  onChange: (e) => setname(e.target.value),
                })}
              />
              <p className="error">{errors.name?.message}</p>
            </div>
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
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password..."
                {...register("confirmPassword", {
                  onChange: (e) => setconfirmPassword(e.target.value),
                })}
              />
              <p className="error">{errors.confirmPassword?.message}</p>
            </div>
            <Button color="primary" className="button w-100 mt-3">
              Register
            </Button>
          </section>
        </form>
        <div className="mt-4 text-center">
          <h5>{msg}</h5>
          <h5>{user?.email}</h5>
        </div>
      </Container>
    </div>
  );
};

export default Register;
