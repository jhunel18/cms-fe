import React from "react";
import { Button, Card } from "react-bootstrap";
import './custom-card-style.css'

const CustomCard = ({ title, icon, content }) => {
  return (
    <Card className="custom-card">
      <Card.Body>
        <div className="d-flex justify-content-end">
        <i
              className={`fas fa-${icon}`}
              style={{
                color: "",
                fontSize: "36px" /* Increase icon size */,
                marginBottom:
                  "10px" /* Optional: Space between icon and text */,
              }}
            ></i>
         
        </div>
        <div>
        <Card.Title>{title}</Card.Title>
        </div>
        <div className="">
        <Card.Text>{content}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
