"use client"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ListGroupItem } from "react-bootstrap";
import { courses } from "../../Database";

export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroupItem 
          key={link} 
          as={Link} 
          href={`/Courses/${course?._id}/${link === "People" ? "People/Table" : link}`}
          className="list-group-item text-danger border-0"
        >
          {link}
        </ListGroupItem>
      ))}
    </div>
  );
}
  {/* <Link href="/Courses/1234/Home" id="wd-course-home-link"
        className="list-group-item active border-0"> Home </Link>
        <Link href="/Courses/1234/Modules" id="wd-course-modules-link"
        className="list-group-item text-danger border-0"> Modules </Link>
      <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link"
        className="list-group-item text-danger border-0"> Piazza </Link>
      <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link"
        className="list-group-item text-danger border-0"> Zoom </Link>
      <Link href="/Courses/1234/Assignments" id="wd-course-assignments-link"
        className="list-group-item text-danger border-0"> Assignments </Link>
      <Link href="/Courses/1234/Quizzes" id="wd-course-quizzes-link"
        className="list-group-item text-danger border-0"> Quizzes </Link>
        <Link href="/Courses/1234/Grades" id="wd-course-grades-link"
        className="list-group-item text-danger border-0"> Grades </Link>
      <Link href="/Courses/1234/People/Table" id="wd-course-people-link"
        className="list-group-item text-danger border-0" > People </Link>

<Link href="/Courses/1234/People/Table" id="wd-course-people-link"
        className="list-group-item text-danger border-0" > People </Link> */}


           // <div id="wd-courses-navigation">
    //   <Link href="/Courses/1234/Home" id="wd-course-home-link">Home</Link><br/>
    //   <Link href="/Courses/1234/Modules" id="wd-course-modules-link">Modules</Link><br/>
    //   <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link">Piazza</Link><br/>
    //   <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link">Zoom</Link><br/>
    //   <Link href="/Courses/1234/Assignments" id="wd-course-quizzes-link">Assignments</Link><br/>
    //   <Link href="/Courses/1234/Quizzes" id="wd-course-assignments-link">Quizzes</Link><br/>
    //   <Link href="/Courses/1234/Grades" id="wd-course-grades-link">Grades</Link><br/>
    //   <Link href="/Courses/1234/People/Table" id="wd-course-people-link">People</Link><br/>
    // </div>
