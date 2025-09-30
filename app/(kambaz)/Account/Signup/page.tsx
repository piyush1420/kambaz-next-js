import Link from "next/link";
import { Form, Container } from "react-bootstrap";

export default function Signup() {
  return (
    <Container 
      id="wd-signup-screen" 
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}>
      
      <div style={{ width: "350px" }}>
        <h3 className="mb-4">Sign up</h3>
        
        <Form.Control 
          className="wd-username mb-2"
          placeholder="username"
          size="lg"
        />
        
        <Form.Control 
          className="wd-password mb-2"
          placeholder="password" 
          type="password"
          size="lg"
        />
        
        <Form.Control 
          className="wd-password-verify mb-2"
          placeholder="verify password" 
          type="password"
          size="lg"
        />
        
        <Link 
          href="Profile"
          className="btn btn-primary w-100 mb-2 text-decoration-none"
          style={{ display: "inline-block" }}>
          Sign up
        </Link>
        
        <Link 
          href="Signin"
          className="text-decoration-none">
          Sign in
        </Link>
      </div>
    </Container>
  );
}