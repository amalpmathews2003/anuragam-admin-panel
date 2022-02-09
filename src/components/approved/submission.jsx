import { Row, Col, Form } from "react-bootstrap";
export function Submission({ submission, handleSwitchChange }) {
  return (
    
    <Row key={submission.id}>
      <Col>{submission.name}</Col>
      <Col>{submission.message}</Col>
      <Col>{submission.contact}</Col>
      <Col>
        <Form>
          <Form.Check
            type="switch"
            id={`${submission.id}`}
            // label="Check this switch"
            onChange={() => {
              handleSwitchChange(submission.id);
            }}
          ></Form.Check>
        </Form>
      </Col>
      {/* {submission.id} */}
    </Row>
  );
}
