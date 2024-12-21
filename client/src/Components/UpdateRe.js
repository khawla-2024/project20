import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../Features/UserSlice";
import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap";

const UpdateProduct = () => {
  const { id } = useParams(); // Access the product ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the authentication state
  const isAuthenticated = useSelector((state) => state.users?.isLogin || false);

  // Get the product data from Redux state
  const user = useSelector((state) =>
    state.users.exampleData.find((pro) => pro.id === id)
  );

  // Local state to manage form fields
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    images: "",
  });

  // Populate form data when the component loads
  useEffect(() => {
    if (user) {
      setFormData({
        id: user.id,
        title: user.title,
        images: user.images,
      });
    }
  }, [user]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert("You must be logged in to update a product!");
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    // Dispatch the updateProduct action
    dispatch(updateProduct(formData));
    // Navigate back to the ManageRe page after updating
    navigate("/");
  };

  return (
    <Container>
      <h2>Update Restaurant</h2>
      {user ? (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="id">Product ID</Label>
            <Input
              type="text"
              name="id"
              id="id"
              value={formData.id}
              onChange={handleChange}
              disabled // ID shouldn't be editable
            />
          </FormGroup>
          <FormGroup>
            <Label for="title">Product Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="images">Image URL</Label>
            <Input
              type="text"
              name="images"
              id="images"
              value={formData.images}
              onChange={handleChange}
            />
          </FormGroup>
          <Button color="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      ) : (
        <p>Product not found</p>
      )}
    </Container>
  );
};

export default UpdateProduct;
