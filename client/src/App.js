import React from "react";
import { Button } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Button
        onClick={() => alert("hey you'r react-bootstrap project is set.")}
        variant="outline-success"
      >
        Close me
      </Button>
    </>
  );
};

export default App;
