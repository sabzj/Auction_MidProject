import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "./auctionsOnMainPage.css";

const AuctionsCardsOnMain = () => {
  return (
    <Container>
      <Row className="card-row">
        <Col xs={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>This is a small card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is a small card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is a small card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="big-card">
          <Card>
            <Card.Body>
              <Card.Title>Big Card</Card.Title>
              <Card.Text>This is a bigger card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuctionsCardsOnMain;
