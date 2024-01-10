import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from "recoil";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecoilRoot>
        <div style={{ display: "flex", justifyContent: "center", margin: 100 }}>
          <Card style={{ padding: 30, width: 500, height: 200 }}>
            <Typography variant="h2" textAlign={"center"}>
              Counter Game
            </Typography>
            <br />
            <br />
            <br />
            <Buttons />
            <br />
            <CountComponent />
          </Card>
        </div>
      </RecoilRoot>
    </>
  );
}

function Buttons() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((eCount) => eCount + 1);
        }}
      >
        Increase Counter
      </Button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((eCount) => eCount - 1);
        }}
      >
        Decrease Counter
      </Button>
    </div>
  );
}

function CountComponent() {
  const count = useRecoilValue(countState);
  return (
    <div>
      <Typography variant="h4" textAlign={"center"}>
        {count}
      </Typography>
    </div>
  );
}

export default App;

const countState = atom({
  key: "countState",
  default: 0,
});
