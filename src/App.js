import React from "react";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
  const firstName = "";

  return (
    <div>
      <Card border="danger"  style={{ width: "18rem" }}>
        <Card.Body>
          <Image />
          <Card.Title >
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
    </div>
  );
};

export default App;