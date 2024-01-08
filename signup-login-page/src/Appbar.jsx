import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <div>
        <Typography level="h2">
          <a href="http://localhost:5173/" style={{ color: "#1976d2", textDecoration: "none" }}>
            CodeCourse
          </a>
        </Typography>
      </div>
      <div>
        <Button
          variant="plain"
          style={{ color: "#2dba4e", fontWeight: "bolder", marginRight: 5 }}
          onClick={() => {
            window.open("https://github.com/ayushmanyd", "_blank");
          }}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          style={{ fontWeight: "bold", marginRight: 5 }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </Button>
        <Button
          variant="outlined"
          style={{ fontWeight: "bold", textDecoration: "none" }}
          onClick={() => {
            navigate("/signin");
          }}
        >
          Log in
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
