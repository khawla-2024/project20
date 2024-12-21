import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../Features/UserSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Table, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"; // Import Link for navigation

// Form validation schema
const schema = yup.object().shape({
  id: yup.string().required("ID is required"),
  title: yup.string().required("Title is required"),
  images: yup.string().url("Enter a valid image URL").required("Image URL is required"),
});

const ManageRe = () => {
  const dispatch = useDispatch();
  const exampleData = useSelector((state) => state.users.exampleData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const existingProduct = exampleData.find((product) => product.id === data.id);

    if (existingProduct) {
      alert("Product ID already exists.");
      return;
    }

    const newProduct = {
      id: data.id,
      title: data.title,
      images: data.images,
    };

    // Simulate server request here, dispatch locally
    dispatch(addProduct(newProduct));
    alert("Product added successfully!");
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <h4>Add Product</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="form-control"
                placeholder="Product ID"
                {...register("id")}
              />
              <p className="error">{errors.id?.message}</p>
            </div>
            <div>
              <input
                className="form-control"
                placeholder="Title"
                {...register("title")}
              />
              <p className="error">{errors.title?.message}</p>
            </div>
            <div>
              <input
                className="form-control"
                placeholder="Image URL"
                {...register("images")}
              />
              <p className="error">{errors.images?.message}</p>
            </div>
            <Button type="submit" color="primary">
              Save Product
            </Button>
          </form>
        </Col>
        <Col md={8}>
          <h4>Product List</h4>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {exampleData.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <img src={product.images} alt={product.title} width="100" />
                  </td>
                  <td>{product.title}</td>
                  <td>
                    <Button
                      color="danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </Button>
                    <Link
                      to={`/update/${product.id}`}
                      className="btn btn-primary ms-2"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageRe;
