import React from "react";
import { Button, Card } from "react-bootstrap";
import './custom-card-style.css'

const CustomCard = ({ title, icon, content, type }) => {
  const cardStyles = {
    primary: {
      backgroundColor: "#007bff",
      color: "#fff",
       boxShadow:'0px 0px 3px rgba(0, 0, 0, 0.5)'
    },
    success: {
      backgroundColor: "#28a745",
      color: "#fff",
       boxShadow:'0px 0px 3px rgba(0, 0, 0, 0.5)'
    },
    danger: {
      backgroundColor: "#dc3545",
      color: "#fff",
       boxShadow:'0px 0px 3px rgba(0, 0, 0, 0.5)'
    },
    default: {
      backgroundColor: "#f8f9fa",
      color: "#000",
       boxShadow:'0px 0px 3px rgba(0, 0, 0, 0.5)'
    },
  };

  const selectedStyle = cardStyles[type] || cardStyles.default;
  return (
    <Card className="custom-card" style= {selectedStyle}>
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
        <Card.Title style={{fontSize:'30px'}}>{title}</Card.Title>
        </div>
        <div className="">
        <Card.Text style={{fontSize:'18px'}}>{content}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
