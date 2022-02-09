import { useState, useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { getApprovedSubmissions } from "../../lib/getApprovedSubmissions";
import { updateSubmission } from "../../lib/updateSubmission";
import { Submission } from "./submission";

export function ApprovedMain() {
  const [submissions, setSubmissions] = useState(null);
  useEffect(() => {
    getApprovedSubmissions(setSubmissions);
  }, []);

  function handleSwitchChange(submissionId) {
    updateSubmission(submissionId, 0);
  }

  return (
    <div>
      {submissions ? (
        <Container fluid>
          <Alert >
            <Row>
              <Col>Name</Col>
              <Col>Message</Col>
              <Col>Contact</Col>
              <Col>Dis Approve</Col>
            </Row>
          </Alert>
          {submissions.map((submission) => (
            <Alert key={submission.id} variant="success">
              <Submission
                submission={submission}
                handleSwitchChange={handleSwitchChange}
              ></Submission>
            </Alert>
          ))}
        </Container>
      ) : (
        <>Loading</>
      )}
    </div>
  );
}
