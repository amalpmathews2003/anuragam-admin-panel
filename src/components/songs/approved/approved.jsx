import { useState, useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import {
  getApprovedSongs,
  getApprovedSubmissions,
} from "../../../lib/getApprovedSubmissions";
import {
  updateSubmission,
  updateSubmissionSongs,
} from "../../../lib/updateSubmission";
import { Submission } from "./submission";

export function ApprovedMainSongs() {
  const [submissions, setSubmissions] = useState(null);
  useEffect(() => {
    getApprovedSongs(setSubmissions);
  }, []);

  function handleSwitchChange(submissionId) {
    updateSubmissionSongs(submissionId, 0);
  }

  return (
    <div>
      <Alert variant="secondary">
        <center>
          <h1>Approved Songs</h1>
        </center>
      </Alert>

      {submissions ? (
        <Container fluid>
          <Alert>
            <Row>
              <Col>Name</Col>
              <Col>Song</Col>
              <Col>Contact</Col>
              <Col>Disapprove</Col>
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
