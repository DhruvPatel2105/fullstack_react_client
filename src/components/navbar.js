import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         Dhruv
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addEmployee">
                Add Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/retirement">
                Retire Soon
              </Link>
            </li>
          </ul>
          <Form className="d-flex">
            <Form.Control
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <Button  variant="secondary" className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </Button>
          </Form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
