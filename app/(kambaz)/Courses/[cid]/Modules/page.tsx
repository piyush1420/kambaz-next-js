import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (

      <div>
  <ModulesControls /><br /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
        
      <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />

      </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
        </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
        </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />Learn what is Web Development <LessonControlButtons /></ListGroupItem>
      </ListGroup>

    </ListGroupItem>
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons /> </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />  LESSON 1 <LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons /></ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  </ListGroup>
</div>

      // <div>
      //   {/* buttons to implement DIY*/}
      //   <button type="button" id="wd-collapse-All">Collapse All</button>

      //   <button type="button" id="wd-View-Progress">View Progress</button>

      //   <select id="wd-publish-all">
      //     <option  value="PUBLISH">Publish All</option>
      //     <option  value="PUBALL">Publish All modules and items</option>
      //     <option value="PUBMOD">Publish modules only</option>
      //     <option  value="UNPUBALL">Unpublish All modules and items</option>
      //     <option value="UNPUBMOD">Unpublish modules only</option>
      //   </select>

      //   <button type="button" id="wd-Module">+Module</button>

      //   <ul id="wd-modules">
      //   <li className="wd-module">
      //     <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
      //     <ul className="wd-lessons">
      //       <li className="wd-lesson">
      //         <span className="wd-title">LEARNING OBJECTIVES</span>
      //         <ul className="wd-content">
      //           <li className="wd-content-item">Introduction to the course</li>
      //           <li className="wd-content-item">Learn what is Web Development</li>
      //         </ul>
      //       </li>
      //       <li className="wd-lesson">
      //         <span className="wd-title">READING</span>
      //         <ul className="wd-content">
      //           <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
      //           <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
      //         </ul>
      //       </li>
      //       <li className="wd-lesson">
      //         <span className="wd-title">SLIDES</span>
      //         <ul className="wd-content">
      //           <li className="wd-content-item">Introduction to Web Development</li>
      //           <li className="wd-content-item">Creating an HTTP server with Node.js</li>
      //           <li className="wd-content-item">Creating a React Application</li>
      //         </ul>
      //       </li>
      //     </ul>
      //   </li>
      //   <li className="wd-module">
      //     <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
      //     <ul className="wd-lessons">
      //       <li className="wd-lesson">
      //         <span className="wd-title">LEARNING OBJECTIVES</span>
      //         <ul className="wd-content">
      //           <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
      //           <li className="wd-content-item">Deploy the assignment to Netlify</li>
      //         </ul>
      //       </li>
      //       <li className="wd-lesson">
      //         <span className="wd-title">SLIDES</span>
      //         <ul className="wd-content">
      //           <li className="wd-content-item">Introduction to HTML and the DOM</li>
      //           <li className="wd-content-item">Formatting Web content with Headings and</li>
      //           <li className="wd-content-item">Formatting content with Lists and Tables</li>
      //         </ul>
      //       </li>
      //     </ul>
      //   </li>
      // </ul>
      // </div>
    );
  }