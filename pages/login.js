import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";

const Login = (props) => {
  const router = useRouter();
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const username = window.localStorage.getItem("username");
    const password = window.localStorage.getItem("password");
    if (username && password) {
      setLogindata({
        email: username,
        password: password,
      });
      setChecked(true);
    }
  }, []);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setLogindata({ ...logindata, [name]: value });
  };
  const handleRemember = (e) => {
    setChecked(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(logindata)

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(logindata),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        window.localStorage.setItem("token", result.token);

        //   window.localStorage.setItem("checekd", checked);
        //   window.localStorage.setItem("username", logindata.email);
        //   window.localStorage.setItem("password", logindata.password);

        if (checked) {
          window.localStorage.setItem("username", logindata.email);
          window.localStorage.setItem("password", logindata.password);
        } else {
          window.localStorage.removeItem("username");
          window.localStorage.removeItem("password");
        }

        router.push("/");
      });
  };

  return (
    <Row>
      <Col sm={{ span: 4, offset: 4 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="loginform.username">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Username"
              name="email"
              onChange={handleInput}
              value={logindata.email}
            />
          </Form.Group>
          <Form.Group controlId="loginform.password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              value={logindata.password}
            />
          </Form.Group>
          <Form.Group controlId="remember">
            <Form.Check
              type="checkbox"
              label="Remember me"
              onChange={handleRemember}
              checked={checked}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
