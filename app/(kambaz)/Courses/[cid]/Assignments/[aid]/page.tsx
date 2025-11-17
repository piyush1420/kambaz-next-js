// Assignment Editor Page 
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Form, Button, Row, Col, Card, FormGroup } from "react-bootstrap";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "../reducer";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  
  // Get assignments from Redux store
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  
  // Check if we're creating new or editing existing
  const isNew = aid === "new";
  
  // Check if edit mode is enabled (only for edit button clicks or new assignments)
  const editParam = searchParams.get("edit");
  const [isEditMode, setIsEditMode] = useState(isNew || editParam === "true");
  
  // Find existing assignment if editing
  const existingAssignment = assignments.find(
    (a: any) => a._id === aid && a.course === cid
  );
  
  // Initialize form state
  const [assignment, setAssignment] = useState({
    _id: isNew ? uuidv4() : existingAssignment?._id || "",
    title: existingAssignment?.title || "New Assignment",
    course: cid as string,
    description: existingAssignment?.description || "Assignment Description",
    points: existingAssignment?.points || 100,
    group: existingAssignment?.group || "ASSIGNMENTS",
    displayGradeAs: existingAssignment?.displayGradeAs || "Percentage",
    submissionType: existingAssignment?.submissionType || "Online",
    assignTo: existingAssignment?.assignTo || "Everyone",
    dueDate: existingAssignment?.dueDate || "",
    availableFrom: existingAssignment?.availableFrom || "",
    availableUntil: existingAssignment?.availableUntil || "",
    editorDueDate: existingAssignment?.editorDueDate || "",
    editorAvailableFrom: existingAssignment?.editorAvailableFrom || "",
    editorAvailableUntil: existingAssignment?.editorAvailableUntil || "",
  });

  // Handle save
  const handleSave = () => {
    if (isNew) {
      // Add new assignment
      dispatch(addAssignment({
        ...assignment,
        dueDate: assignment.editorDueDate ? `${assignment.editorDueDate} at 11:59pm` : "",
        availableFrom: assignment.editorAvailableFrom ? `${assignment.editorAvailableFrom} at 12:00am` : "",
        availableUntil: assignment.editorAvailableUntil ? `${assignment.editorAvailableUntil} at 11:59pm` : "",
      }));
    } else {
      // Update existing assignment
      dispatch(updateAssignment({
        ...assignment,
        dueDate: assignment.editorDueDate ? `${assignment.editorDueDate} at 11:59pm` : "",
        availableFrom: assignment.editorAvailableFrom ? `${assignment.editorAvailableFrom} at 12:00am` : "",
        availableUntil: assignment.editorAvailableUntil ? `${assignment.editorAvailableUntil} at 11:59pm` : "",
      }));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <Row className="mb-3">
        <Col>
          <FormGroup>
            <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
            <Form.Control
              type="text"
              id="wd-name"
              value={assignment.title}
              onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
              size="lg"
              disabled={!isEditMode}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Control
              as="textarea"
              id="wd-description"
              rows={8}
              value={assignment.description}
              onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
              disabled={!isEditMode}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
        </Col>
        <Col md={9}>
          <Form.Control
            type="number"
            id="wd-points"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
            disabled={!isEditMode}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
          <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
        </Col>
        <Col md={9}>
          <Form.Select 
            id="wd-group" 
            value={assignment.group}
            onChange={(e) => setAssignment({ ...assignment, group: e.target.value })}
            disabled={!isEditMode}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
          <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
        </Col>
        <Col md={9}>
          <Form.Select 
            id="wd-display-grade-as" 
            value={assignment.displayGradeAs}
            onChange={(e) => setAssignment({ ...assignment, displayGradeAs: e.target.value })}
            disabled={!isEditMode}
          >
            <option>Percentage</option>
            <option>Points</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
          <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
        </Col>
        <Col md={9}>
          <Card className="p-3">
            <Form.Select 
              id="wd-submission-type" 
              className="mb-3" 
              value={assignment.submissionType}
              onChange={(e) => setAssignment({ ...assignment, submissionType: e.target.value })}
              disabled={!isEditMode}
            >
              <option>Online</option>
              <option>On Paper</option>
              <option>External Tool</option>
            </Form.Select>

            <div>
              <Form.Label className="fw-bold">Online Entry Options</Form.Label>
              <Form.Check
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
                className="mb-2"
                disabled={!isEditMode}
              />
              <Form.Check
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
                className="mb-2"
                defaultChecked
                disabled={!isEditMode}
              />
              <Form.Check
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
                className="mb-2"
                disabled={!isEditMode}
              />
              <Form.Check
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
                className="mb-2"
                disabled={!isEditMode}
              />
              <Form.Check
                type="checkbox"
                id="wd-file-upload"
                label="File Uploads"
                disabled={!isEditMode}
              />
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
          <Form.Label>Assign</Form.Label>
        </Col>
        <Col md={9}>
          <Card className="p-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
              <div className="wd-assign-to-container">
                <span className="wd-assign-tag">Everyone <button className="wd-remove-tag" disabled={!isEditMode}>×</button></span>
              </div>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-due-date"
                    value={assignment.editorDueDate ? `${assignment.editorDueDate}T23:59` : ""}
                    onChange={(e) => setAssignment({ ...assignment, editorDueDate: e.target.value.split('T')[0] })}
                    disabled={!isEditMode}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-available-from"
                    value={assignment.editorAvailableFrom ? `${assignment.editorAvailableFrom}T00:00` : ""}
                    onChange={(e) => setAssignment({ ...assignment, editorAvailableFrom: e.target.value.split('T')[0] })}
                    disabled={!isEditMode}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-available-until"
                    value={assignment.editorAvailableUntil ? `${assignment.editorAvailableUntil}T23:59` : ""}
                    onChange={(e) => setAssignment({ ...assignment, editorAvailableUntil: e.target.value.split('T')[0] })}
                    disabled={!isEditMode}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <hr />

      <div className="d-flex justify-content-end gap-2 mb-4">
        {isEditMode ? (
          <>
            <Button 
              variant="secondary" 
              onClick={handleSave}
            >
              Save
            </Button>
            <Button 
              variant="danger" 
              onClick={() => router.push(`/Courses/${cid}/Assignments`)}
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button 
              variant="primary" 
              onClick={() => setIsEditMode(true)}
            >
              Edit
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => router.push(`/Courses/${cid}/Assignments`)}
            >
              Done
            </Button>
          </>
        )}
      </div>
    </div>
  );
}