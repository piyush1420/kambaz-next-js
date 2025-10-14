/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link";
import { ListGroup, ListGroupItem, Button, Form } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical, IoChevronDown } from "react-icons/io5";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";
import * as db from "../../../Database"
import { useParams } from "next/navigation";

export default function Assignments() {
  const { aid } = useParams();
  const { cid } = useParams();
  const amts = db.assignments;
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Form.Control
          type="text"
          placeholder="Search for Assignments"
          id="wd-search-assignment"
          className="me-2"
          style={{ maxWidth: "300px" }}
        />
        <div>
          <Button variant="secondary" size="lg" className="me-2" id="wd-add-assignment-group">
            <FaPlus className="me-2" />
            Group
          </Button>
          <Button variant="danger" size="lg" id="wd-add-assignment">
            <FaPlus className="me-2" />
            Assignment
          </Button>
        </div>
      </div>
      
      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-assignment-group p-0 mb-0 fs-5 border-gray">
          <div className="wd-assignment-header p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <IoChevronDown className="me-2" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="wd-assignment-percentage me-3">40% of Total</span>
              <FaPlus className="fs-4 me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          
          <ListGroup className="rounded-0">
          {amts
                  .filter((amt: any) => amt.course === cid)
                  // .filter((crsAmt: any)) => crsAmt === ._id)
                  .map((crsAmt: any) => (
            <ListGroupItem key={crsAmt._id}  className="wd-assignment-item p-3 ps-1 d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3 mt-1" />
              <FaFileAlt className="me-2 mt-1 text-success" />
              <div className="flex-grow-1">

                
                <Link href={`/Courses/${crsAmt?.course}/Assignments/${crsAmt?._id}`} className="text-decoration-none">
                  <strong className="text-dark">{crsAmt?._id}</strong>
                </Link>
                <div className="text-muted small mt-1">
                  <span className="text-danger">{crsAmt?.title}</span>
                  <span className="mx-1">|</span>
                  <span><strong>Not available until</strong> {crsAmt?.availableFrom}</span>
                  <span className="mx-1">|</span>
                  <br />
                  <span><strong>Due</strong> {crsAmt?.dueDate}</span>
                  <span className="mx-1">|</span>
                  <span>100 pts</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>))}
            
            
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}