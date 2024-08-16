import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certicards from "./Certicards";
import Particle from "../Particle";
import yug from "../../Assets/yug.jpg";
import internship from "../../Assets/../Assets/Certificates/internship.pdf";
import reactimg from "../../Assets/../Assets/React.jpg";
import javacer from "../../Assets/../Assets/Certificates/java_certification.png";
import Ccer from "../../Assets/../Assets/Certificates/C.png";
import reactCer from "../../Assets/../Assets/Certificates/React.pdf";
import Coursera from "../../Assets/../Assets/Certificates/Course_era_python_certificate.pdf";
import python from "../../Assets/../Assets/python_for_everybody.jpg";
import cld from "../../Assets/../Assets/cld.jpg";
import html from "../../Assets/../Assets/html.jpg";
import intern from "../../Assets/intern.jpg";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certificates I've achieved recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={yug}
              isBlog={false}
              title="Yugaas Tech"
              description="Successfully completed 3 months Front-End Developer Internship in the Yugaas Tech."
              link={internship}
            />
          </Col>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={intern}
              isBlog={false}
              title="Data Analytics"
              description="Successfully completed Data Analytics in ICTACADEMY."
              link={internship}
            />
          </Col>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={python}
              isBlog={false}
              title="Python for Everybody"
              description="Python for Everybody is a Specialisation course Accomplished in the Coursera. "
              link={Coursera}
            />
          </Col>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={reactimg}
              isBlog={false}
              title="Machine Learning Onramp"
              description="Successfully completed Machine Learning training course in Mathworks."
              link={reactCer}
            />
          </Col>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={html}
              isBlog={false}
              title="HTML, CSS, JAVASCRIPT"
              description="Successfully completed the basic HTML, CSS, JAVASCRIPT course in the Udemy learning platform"
              link={Ccer}
            />
          </Col>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={cld}
              isBlog={false}
              title="Cloud Computing"
              description="Successfully completed the Cloud Computig course in Skillvetex learning platform."
              link={javacer}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
