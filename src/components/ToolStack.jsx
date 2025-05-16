import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { 
  DiGulp,
  DiFirebase,
  DiNpm
 } from "react-icons/di";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGulp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default ToolStack;