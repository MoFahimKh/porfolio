import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import qodehr from "../../Assets/Projects/qodehr.png";
import ethSendAndSwap from "../../Assets/Projects/eth-send-and-swap.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bingo from "../../Assets/Projects/bingo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few personal projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Realtime Chat Application"
              description="React ,Chat-engine API, Firebase. Developed a full-fledged Firebase Chat Application.
With following key learnings: Routing, Firebase Social Login, Firebase Google Login, Firebase Facebook Login, React
Context API, Chat Engine, REST API’s."
              demoLink="https://Fahim-schatapp.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ethSendAndSwap}
              isBlog={false}
              title="Eth Send & Swap"
              description="Developed an innovative React blockchain DApp (Decentralized App) with ethers.js and
Uniswap v3 SDK on Ethereum’s different networks. Implemented a swap feature for various ERC20 tokens."
              ghLink="https://github.com/MoFahimKh/my-wallet-app"
              demoLink="https://send-and-swap-tokens-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bingo}
              isBlog={false}
              title="Bingo Blockchain Game"
              description="Constructed a real-time blockchain bingo game designed using React.js, Ethers.js,
Context API, JS, and a Solidity smart contract. Key Learnings: Signing and querying blockchain data."
              ghLink="https://github.com/MoFahimKh/bnb-wallet-app"
              demoLink="https://bingo-game-dapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qodehr}
              isBlog={false}
              title="QodeHR"
              description="Built an Employee Management System using MVC architecture with Node.js, Express.js, Nanodb, Sequelize, EJS & JS. Key Learnings: Database design, routing, environment variables, templating engines & REST APIs"
              ghLink="https://github.com/m-fahim-kh/employee-management-system/tree/employee-management-system"
              demoLink="https://qodeHR.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
