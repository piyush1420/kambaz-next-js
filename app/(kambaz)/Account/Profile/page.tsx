"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = () => {
    if (!currentUser) {
      redirect("/Account/Signin");
      return;
    }
    setProfile(currentUser);
  };

  const signout = () => {
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={8} md={6} lg={4}>
          <h1 className="mb-4">Profile</h1>
          {profile && (
            <Form>
              <Form.Group className="mb-3" controlId="wd-username">
                <FormControl
                  value={profile.username || ""}
                  placeholder="username"
                  onChange={(e) =>
                    setProfile({ ...profile, username: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-password">
                <FormControl
                  value={profile.password || ""}
                  placeholder="password"
                  type="password"
                  onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-firstname">
                <FormControl
                  value={profile.firstName || ""}
                  placeholder="First Name"
                  onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-lastname">
                <FormControl
                  value={profile.lastName || ""}
                  placeholder="Last Name"
                  onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-dob">
                <FormControl
                  value={profile.dob || ""}
                  type="date"
                  onChange={(e) =>
                    setProfile({ ...profile, dob: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-email">
                <FormControl
                  value={profile.email || ""}
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-role">
                <Form.Select
                  value={profile.role || "USER"}
                  onChange={(e) =>
                    setProfile({ ...profile, role: e.target.value })
                  }
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}

          <Button
            id="wd-signout-btn"
            variant="danger"
            className="w-100 mt-3"
            onClick={signout}
          >
            Signout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
