import Link from "next/link";
import { Form, Container } from "react-bootstrap";

export default function Profile() {
  return (
    <Container 
      id="wd-profile-screen" 
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}>
      
      <div style={{ width: "350px" }}>
        <h3 className="mb-4">Profile</h3>
        
        <Form.Control 
          className="wd-username mb-2"
          defaultValue="alice"
          placeholder="username"
          size="lg"
        />
        
        <Form.Control 
          className="wd-password mb-2"
          defaultValue="123"
          placeholder="password" 
          type="password"
          size="lg"
        />
        
        <Form.Control 
          id="wd-firstname"
          className="mb-2"
          defaultValue="Alice"
          placeholder="First Name"
          size="lg"
        />
        
        <Form.Control 
          id="wd-lastname"
          className="mb-2"
          defaultValue="Wonderland"
          placeholder="Last Name"
          size="lg"
        />
        
        <Form.Control 
          id="wd-dob"
          className="mb-2"
          defaultValue="2000-01-01"
          type="date"
          size="lg"
        />
        
        <Form.Control 
          id="wd-email"
          className="mb-2"
          defaultValue="alice@wonderland"
          type="email"
          placeholder="Email"
          size="lg"
        />
        
        <Form.Select 
          id="wd-role"
          className="mb-3"
          defaultValue="FACULTY"
          size="lg">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
        
        <Link 
          href="Signin"
          className="btn btn-danger w-100 text-decoration-none"
          style={{ display: "inline-block" }}>
          Sign out
        </Link>
      </div>
    </Container>
  );
}