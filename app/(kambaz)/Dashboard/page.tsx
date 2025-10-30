/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation"; 
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import EnrollmentControls from "./EnrollmentControls";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
  FormControl,
} from "react-bootstrap";

export default function Dashboard() {
  const dispatch = useDispatch();

  const courses = useSelector((state: any) => state.coursesReducer.courses);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  // Redirect if not logged in (uses redirect instead of router.push)
  useEffect(() => {
    if (!currentUser) {
      redirect("/Account/Signin");
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  // Determine which courses to show
  const getVisibleCourses = () => {
    if (showAllCourses) {
      return courses; // Show all courses when toggle is on
    }

    if (currentUser.role === "FACULTY") {
      // Faculty see all courses they can manage
      return courses;
    }

    // Students see only enrolled courses
    return courses.filter((c: any) =>
      enrollments.some(
        (en: any) => en.user === currentUser._id && en.course === c._id
      )
    );
  };

  const visibleCourses = getVisibleCourses();
  const canEditCourses =
    currentUser.role === "FACULTY" || currentUser.role === "ADMIN";

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {/* Enrollments toggle button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="wd-dashboard-published">
          {showAllCourses ? "All Courses" : "My Courses"} ({visibleCourses.length})
        </h2>
        {currentUser.role === "STUDENT" && (
          <Button
            variant="primary"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Show My Courses" : "Show All Courses"}
          </Button>
        )}
      </div>

      {/* Only show course management for Faculty/Admin */}
      {canEditCourses && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse(course))}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            rows={3}
            as="textarea"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    src={course.image}
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>

                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-primary">Go</button>

                      {canEditCourses && (
                        <div>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course._id));
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning ms-2"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Enrollment controls for students */}
                    <EnrollmentControls 
                      courseId={course._id} 
                      showAllCourses={showAllCourses}
                    />
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
