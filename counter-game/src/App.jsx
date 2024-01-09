import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", margin: 100 }}>
        <Card style={{ padding: 30, width: 500, height: 200 }}>
          <Typography variant="h2" textAlign={"center"}>
            Counter Game
          </Typography>
          <br />
          <br />
          <br />
          <Buttons count={count} setCount={setCount} />
          <br />
          <CountComponent count={count} />
        </Card>
      </div>
    </>
  );
}

function Buttons({ count, setCount }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </div>
  );
}

function Increase({ count, setCount }) {
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
    </div>
  );
}

function Decrease({ count, setCount }) {
  return (
    <div>
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

function CountComponent({ count }) {
  return (
    <div>
      <Typography variant="h4" textAlign={"center"}>
        {count}
      </Typography>
    </div>
  );
}

export default App;
