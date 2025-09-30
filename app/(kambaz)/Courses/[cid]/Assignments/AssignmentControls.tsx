import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa6'

export default function AssignmentControls() {
  return (
    <div><Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
    Assignment
  </Button>
  <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-add-assignment-group">
    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
    Group
  </Button>
  <Form.Control
    type="text"
    placeholder="Search for Assignments"
    id="wd-search-assignment"
    className="float-start"
    style={{ width: "300px" }}
  /></div>
  )
}
