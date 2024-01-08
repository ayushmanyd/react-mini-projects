import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 150,
          padding: 20,
        }}
      >
        <Typography level="h2">Welcome to CodeCourse.</Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card variant="outlined" sx={{ maxWidth: 400 }}>
          <div
            style={{
              width: 300,
              padding: 30,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <Button
                variant="outlined"
                style={{ fontWeight: "bolder", marginRight: 5 }}
                onClick={() => {
                  window.open("https://github.com/ayushmanyd", "_blank");
                }}
              >
                GitHub
              </Button>
              <Button
                variant="contained"
                style={{ fontWeight: "bold", marginRight: 5 }}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </Button>
              <Button
                variant="contained"
                style={{ fontWeight: "bold", textDecoration: "none" }}
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Log in
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Home;
