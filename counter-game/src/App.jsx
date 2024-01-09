import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ padding: 20, width: 500 }}>
          <Typography variant="h3">Counter Game</Typography>
          <br />
          <Buttons count={count} setCount={setCount} />
          <CountComponent count={count} />
        </Card>
      </div>
    </>
  );
}

function Buttons() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </div>
  );
}

function Increase() {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Counter
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Counter
      </Button>
    </div>
  );
}

export default App;
