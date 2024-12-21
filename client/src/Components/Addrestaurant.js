import { Button, Container, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addRes, updateRes, deleteRes, registerRestaurant } from "../Features/ResSlice";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const resSchema = yup.object().shape({
  nameres: yup.string().required("Restaurant name is required"),
  date: yup.string().required("Date is required"),
  //day: yup.string().required("Day is required"),
  numperson: yup.number().required("Number of persons is required").positive("Must be greater than 0"),
});
const Addrestaurant = () => {
  const { user, msg } = useSelector((state) => state.users);
  const [nameres, setNameres] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [numperson, setNumperson] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(resSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = () => {
    const resData = {
      nameres,
      date,
      day,
      numperson,
    };
    dispatch(registerRestaurant(resData));
    alert("Reservation added successfully!");
    //navigate("/login");
  };

  // Function to update day based on the selected date
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate); // Update the date state
    const dateObj = new Date(selectedDate);
    const dayOfWeek = dateObj.toLocaleDateString(undefined, { weekday: "long" }); // Get day of the week
    setDay(dayOfWeek); // Update the day state
  };

  return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1" lg="6">
          <form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="appTitle">
              {selectedRestaurant ? `Update ${selectedRestaurant.nameres}` : "Add Restaurant Reservation"}
            </div>

            <section className="form">
              <div className="form-group">
              <label>Restaurant Name</label>
                <select
                  className="form-control"
                  {...register("nameres", {
                    onChange: (e) => setNameres(e.target.value),
                  })}
                >
                  <option value="">Select Restaurant Name</option>
                  <option value="Aldhahli Restaurant">Aldhahli Restaurant</option>
                  <option value="Nizwa Al Khair Restaurant">Nizwa Al Khair Restaurant</option>
                  <option value="Liwan Nizwa Restaurant">Liwan Nizwa Restaurant</option>
                  <option value="AlMaisan Restaurant">AlMaisan Restaurant</option>
                  <option value="Al-Masharef Restaurant Nizwa">Al-Masharef Restaurant Nizwa</option>
                </select>
                <p className="error">{errors.nameres?.message}</p>
              </div>

              <div className="form-group">
              <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("date", {
                    onChange: (e) => handleDateChange(e.target.value),
                  })}
                />
                <p className="error">{errors.date?.message}</p>
              </div>

              <div className="form-group">
              <label>Day</label>
                <input
                  type="text"
                  className="form-control"
                  value={day}
                  readOnly
                  {...register("day")}
                />
                <p className="error">{errors.day?.message}</p>
              </div>

              <div className="form-group">
                <label>number of person</label>
                <input
                  type="number"
                  className="form-control"
                  {...register("numperson", {
                    onChange: (e) => setNumperson(e.target.value),
                  })}
                />
                <p className="error">{errors.numperson?.message}</p>
              </div>

              <Button color="primary" className="button">
                {selectedRestaurant ? "Update" : "Add"} Reservation
              </Button>
            </section>
          </form>
        </Col>
        <Col className="columndiv2" lg="6"></Col>
      </Row>
    </Container>
  );
};

export default Addrestaurant;
