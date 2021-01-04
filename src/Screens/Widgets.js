import React, { useState } from "react";
import "../App.css";
import {
  Card,
  Button,
  CardDeck,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";

function Dashboard() {
  return (
    <div className="dashboard">
      <Card className="ipInCard" style={{ width: "80rem" }}>
        <Card.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="state">
                  <Form.Label className='ipfield' style={{paddingLeft:0}}>City</Form.Label>
                  <Form.Control className='control' as="select">
                    <option>Choose location.</option>
                    <option>bangalore</option>
                    <option>mysore</option>
                    <option>raichur</option>
                    <option>gulbarga</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="Indate">
                  <Form.Label className='ipfield'>Checkin date</Form.Label>
                  <Form.Control className='control' type="date" placeholder="Checkin date" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="OutDate">
                  <Form.Label className='ipfield'>checkout date</Form.Label>
                  <Form.Control className='control' placeholder="Checkout date" type="date" required />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Col} controlId="adults">
                  <Form.Label className='ipfield'>Adults</Form.Label>
                  <Form.Control className='control' as="select">
                    <option>Choose Adults.</option>
                    <option>3+</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="childrens">
                  <Form.Label className='ipfield'>Children</Form.Label>
                  <Form.Control className='control' as="select">
                    <option>Choose Children.</option>
                    <option>3+</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Button variant="warning" className='mt-4 btn'>Book Now</Button>
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Dashboard;
