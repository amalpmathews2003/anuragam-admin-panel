import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getSubmissions } from "../../lib/getSubmissions";
import { updateSubmission } from "../../lib/updateSubmission";
import { Submission } from "./submission";

export function Main() {
  const [submissions, setSubmissions] = useState(null);
  useEffect(() => {
    getSubmissions(setSubmissions);
  }, []);

  function handleSwitchChange(submissionId) {
    updateSubmission(submissionId);
  }

  return (
    <div>
      {submissions ? (
        <Container fluid>
          <Row>
            <Col>Name</Col>
            <Col>Message</Col>
            <Col>Contact</Col>
            <Col>Cofirm </Col>
          </Row>
          {submissions.map((submission) => (
            <Submission
              key={submission.id}
              submission={submission}
              handleSwitchChange={handleSwitchChange}
            ></Submission>
          ))}
        </Container>
      ) : (
        <>Loading</>
      )}
    </div>
  );
}
