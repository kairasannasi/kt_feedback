import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
  const [displayform, setDisplay] = useState(true);

  const [customerName, setCustomerName] = useState("");
  const [phNo, setPhNo] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [serviceServed, setServiceServed] = useState("");
  const [serviceComplete, setServiceComplete] = useState("");
  const [satisfactionLevel, setSatisfactionLevel] = useState("");
  const [feedbackDesigners_Editors, setFeedbackDesigners_Editors] =
    useState("");
  const [ratingForCRM, setRatingForCRM] = useState("");
  const [reherts, setReherts] = useState("");

  const [error_msg, setErrorMsg] = useState(
    "Please enter the value for the above field"
  );
  const navigate = useNavigate();
  const formSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://videoaudit-server.onrender.com/api/feedback/add", {
        customerName: customerName,
        phNo: phNo,
        businessName: businessName,
        serviceServed: serviceServed,
        serviceComplete: serviceComplete,
        satisfactionLevel: satisfactionLevel,
        feedbackDesigners_Editors: feedbackDesigners_Editors,
        ratingForCRM: ratingForCRM,
        reherts: reherts,
      })
      .then((response) => {
        toast.success(response.data.message, {
          position: "top-right",
        });
        navigate("/");
        setDisplay(false);
      })
      .catch((error) => console.log(error));
    setErrorMsg("Please enter the value for the above field");
  };

  const hanldeServed = (e) => {
    setServiceServed(e.target.value);
  };

  const handleComplete = (e) => {
    setServiceComplete(e.target.value);
  };

  const handleSatisfaction = (e) => {
    setSatisfactionLevel(e.target.value);
  };

  const handleCrm = (e) => {
    setRatingForCRM(e.target.value);
  };

  return (
    <Container>
      {displayform ? (
        <Card>
          <Card.Header>
            <cite title="Source Title">
              We are committed to providing you with the best service experience
              possible, so we welcome your comments.
            </cite>
          </Card.Header>

          <Container className="padding30px">
            <Form onSubmit={formSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="required-field">
                      Your Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </Form.Group>
                  <Alert variant="danger" id="name_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
                {/* <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      required
                      placeholder="your email address"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </Form.Group>
                  <Alert variant="danger" id="email_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col> */}
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="required-field">Phone</Form.Label>

                    <Form.Control
                      placeholder="99999 99999"
                      value={phNo}
                      onChange={(e) => setPhNo(e.target.value)}
                    />
                  </Form.Group>
                  <Alert variant="danger" id="phone_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="required-field">
                      Business Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Your Business Name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                  </Form.Group>
                  <Alert variant="danger" id="name_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="required-field">
                      Service Served
                    </Form.Label>
                    <Form.Select
                      defaultValue={0}
                      value={serviceServed}
                      onChange={hanldeServed}
                    >
                      <option>--Select Option --</option>
                      <option value="Business Awareness">
                        {" "}
                        Business Awareness
                      </option>
                      <option value="Lead generation">Lead generation</option>
                      <option value="Reels">Reels</option>
                      <option value="Website">Website</option>
                    </Form.Select>
                  </Form.Group>
                  <Alert variant="danger" id="name_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="required-field">
                      Service Complete
                    </Form.Label>
                    <Form.Select
                      defaultValue={0}
                      value={serviceComplete}
                      onChange={handleComplete}
                    >
                      <option>--Select Option --</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </Form.Group>
                  <Alert variant="danger" id="name_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="required-field">
                      Satisfaction Level
                    </Form.Label>
                    <Form.Select
                      defaultValue={0}
                      value={satisfactionLevel}
                      onChange={handleSatisfaction}
                    >
                      <option>--Select Option --</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="bad">Bad</option>
                    </Form.Select>
                  </Form.Group>
                  <Alert variant="danger" id="name_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="required-field">
                      Rating for CRM
                    </Form.Label>
                    <Form.Select
                      defaultValue={0}
                      value={ratingForCRM}
                      onChange={handleCrm}
                    >
                      <option>--Select Option --</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="bad">Bad</option>
                    </Form.Select>
                  </Form.Group>
                  <Alert variant="danger" id="name_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Any feedback for Desingers/ Editors</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={feedbackDesigners_Editors}
                      onChange={(e) =>
                        setFeedbackDesigners_Editors(e.target.value)
                      }
                    />
                  </Form.Group>
                  <Alert variant="danger" id="name_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Reherts received and explained</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={reherts}
                      onChange={(e) => setReherts(e.target.value)}
                    />
                  </Form.Group>
                  <Alert variant="danger" id="email_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
              </Row>
              <Button className="btn_purp" type="submit">
                Submit Review
              </Button>
            </Form>
          </Container>
        </Card>
      ) : (
        <Card bg="light" text="dark">
          <Card.Body>
            <div className="padding30px">
              <div class="circle">
                <div class="checkmark"></div>
              </div>
            </div>
            <Card.Text>Thank you for providing the feedback</Card.Text>
            <Form.Text muted>
              We will work towards improving your experience
            </Form.Text>
            <div className="padding30px">
              <Button
                className="btn_purp"
                onClick={() => (window.location.href = "/")}
              >
                Close
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default FeedbackForm;
