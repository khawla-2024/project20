import { Navbar, Nav, NavItem } from "reactstrap";
import chef from "../Images/chef.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Features/UserSlice"; 
import { useDispatch } from "react-redux";
import "./AboutUs.css";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout())
    navigate("/login");
}
  return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <Link>
              <img src={chef} className="logo" alt=""/>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/">Home</Link></NavItem>
            <NavItem className="nav-item"><Link to='/aboutus'  className="nav-link"> AboutUs</Link> </NavItem>
          <NavItem className="nav-item"><Link to='/manage'  className="nav-link"> Manage restaurant</Link> </NavItem>
          <NavItem className="nav-item"><Link to='/update'  className="nav-link"> Update restaurant</Link> </NavItem>
          <NavItem><Link onClick={handleLogout}>Logout</Link></NavItem>

        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
