import { useState, useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { getSubmissionsSongs } from "../../lib/getSubmissions";
import { getSubmissions } from "../../lib/getSubmissions";
import { updateSubmission } from "../../lib/updateSubmission";
import { Submission } from "./submission";

export function Main() {
  const [submissions, setSubmissions] = useState(null);
  useEffect(() => {
    getSubmissions(setSubmissions);
  }, []);

  function handleSwitchChange(submissionId) {
    updateSubmission(submissionId, 1);
  }

  return (
    <div>
      <Alert variant="secondary">
        <center>
        <h1>Dispproved Messages</h1>
        </center>
      </Alert>

      {submissions ? (
        <Container fluid>
          <Alert variant="success">
            <Row>
              <Col>Name</Col>
              <Col>Message</Col>
              <Col>Contact</Col>
              <Col>Approve</Col>
            </Row>
          </Alert>
          {submissions.map((submission) => (
            <Alert key={submission.id}>
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
