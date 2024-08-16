import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Calc from "../../Assets/Projects/Calc.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogger.googleusercontent.com/img/a/AVvXsEhXdHS6alXZ9Q9wBG0GPlr_-HGuPz-PLWxQWSNUvf5c7AjedM7N2qqiZpbyO9c4MG3pjBT4REdMHFBvzA4Oc6OZnBEU1ERGMnQ-6CyGyW00epGWAxh6eLbeR8Q9txH5c7rEPSI49u80NvgqIjoUvh21B3gWys7bV6BQxulxoYpu95duZbrOtMgB5rGT0ck"
              isBlog={false}
              title="NFT Media"
              description="NFT media is an web3 social platform that allows only the subcribed person to enter into the platform. Here Subscription meant that Minting of an NFT in the User Wallet.!"
              link="https://nft-media-dapp.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://blogger.googleusercontent.com/img/a/AVvXsEg6KRlX6BBBVb3pJ-r4l3yCSH_mHO3Ujr8YjqnUMkCIvkwNvGOSUID2OK64LFqQnrcmpKUMpV8G6qByTcTnVXr-4nKenipx3W5lQpkftOvZPZe-mO6eIfvU7kUWuHZSJ86OddYuJjdJ0IebXz2gXh7CwHtlVyl7k2_h4Oq7NkNICtAAxO_1lW2EFKQgdQ8"}
              isBlog={false}
              title="GreenDAO"
              description="Building an DAO to help the farmers with the supplychain management, getting identity and apply for the loans."
              link="https://green-dao-icp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calc}
              isBlog={false}
              title="Codelessdev"
              description="Codeless Dev uses visual tools like drag and drop for easy website and app creation without coding."
              link="https://codeless-dev.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
