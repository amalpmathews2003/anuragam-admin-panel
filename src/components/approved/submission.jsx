import { Row, Col, Form } from "react-bootstrap";
export function Submission({ submission, handleSwitchChange }) {
  return (
    
    <Row key={submission.id}>
      <Col>{submission.name}</Col>
      <Col>{submission.message}</Col>
      <Col>{submission.contact}</Col>
      <Col>
          <Form.Check
            defaultChecked={"true"}
            type="switch"
            id={`${submission.id}`}
            // label="Check this switch"
            onChange={() => {
              handleSwitchChange(submission.id);
            }}
          ></Form.Check>
      </Col>
      {/* {submission.id} */}
    </Row>
  );
}
