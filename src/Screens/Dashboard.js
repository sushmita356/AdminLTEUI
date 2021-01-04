import React from "react";
import "../App.css";
import {Card,Row,CardDeck} from 'react-bootstrap';

function Dashboard() {
  return (
    <div className="dashboard">
      {/* <h1>Dashboard page</h1> */}

      <Row className="dashboard mt-0">
        <>
          <CardDeck>
            <Card bg="primary" text="white" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card bg="success" text="white" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card bg="warning" text="white" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card bg="danger" text="white" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Danger Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </CardDeck>
        </>
      </Row>

    </div>
  );
}
export default Dashboard;
