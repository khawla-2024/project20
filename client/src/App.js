import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap"; //import the Reactstrap Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import Aboutus from "./Components/Aboutus";
import ManageRe from "./Components/ManageRe";
import UpdateRe from "./Components/UpdateRe";
import Food from "./Components/Food";
import Restaurant_detail1 from "./Components/Restaurant_detail1";
import Rescard from "./Components/Rescard";
import Posts from "./Components/Posts";
import SharePost from "./Components/SharePost";
import Addrestaurant from "./Components/Addrestaurant";
const App = () => {
  const { user } = useSelector((state) => state.users);
 
  return (
    <Container fluid>
      <Router>
        <Row>
          {user ? <Header /> : null}
        </Row>
        <Row className="main">
          <Routes>
          <Route path="/addrestaurant" element={<Addrestaurant />}></Route>

            <Route path="/sharepost" element={<SharePost />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/post" element={<Posts />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/manage" element={<ManageRe />}></Route>
            <Route path="/update/:id" element={<UpdateRe />} />
            <Route path="/food" element={<Food />}></Route>
            <Route path="/Rescard" element={<Rescard />}></Route>
            <Route path="/restaurant/:id" element={<Restaurant_detail1 />}></Route>

          </Routes>
        </Row>
        <Row>{user ? <Footer /> : null}</Row>
      </Router>
    </Container>
  );
};

export default App;
