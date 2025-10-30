/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { enrollInCourse, unenrollFromCourse } from "../Enrollments/reducer";

export default function EnrollmentControls({ 
  courseId, 
  showAllCourses 
}: { 
  courseId: string; 
  showAllCourses: boolean;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  if (!currentUser || currentUser.role === "FACULTY") {
    return null; // Faculty don't need enrollment buttons
  }

  const isEnrolled = enrollments.some(
    (e: any) => e.user === currentUser._id && e.course === courseId
  );

  const handleEnrollment = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (isEnrolled) {
      dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
    }
  };

  // Only show enrollment controls when viewing all courses or for enrolled courses
  if (!showAllCourses && !isEnrolled) {
    return null;
  }

  return (
    <Button
      variant={isEnrolled ? "danger" : "success"}
      size="sm"
      className="mt-2"
      onClick={handleEnrollment}
    >
      {isEnrolled ? "Unenroll" : "Enroll"}
    </Button>
  );
}