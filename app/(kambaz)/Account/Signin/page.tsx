import Link from "next/link";
import { Form, Container } from "react-bootstrap";

export default function Signin() {
  return (
    <Container 
      id="wd-signin-screen" 
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}>
      
      <div style={{ width: "350px" }}>
        <h3 className="mb-4">Sign in</h3>
        
        <Form.Control 
          id="wd-username"
          className="wd-username mb-2"
          placeholder="username"
          size="lg"
        />
        
        <Form.Control 
          id="wd-password"
          className="wd-password mb-2 mt-1"
          placeholder="password" 
          type="password"
          size="lg"
        />
        
        <Link 
          id="wd-signin-btn"
          href="/Dashboard"
          className="btn btn-primary w-100 mb-2 mt-2 text-decoration-none"
          style={{ display: "inline-block" }}>
          Sign in
        </Link>
        
        <Link 
          id="wd-signup-link" 
          href="Signup"
          className="text-decoration-none">
          Sign up
        </Link>
      </div>
    </Container>
  );
}