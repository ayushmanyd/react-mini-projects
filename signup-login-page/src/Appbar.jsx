import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";

function Appbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <div>
        <Typography level="h4">
          <a href="http://localhost:5173/" style={{ textDecoration: "none" }}>
            CodeCourse
          </a>
        </Typography>
      </div>
      <div>
        <Button
          variant="plain"
          style={{ fontWeight: "bold", marginRight: 5 }}
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
            window.location = "/signup";
          }}
        >
          Sign up
        </Button>
        <Button
          variant="outlined"
          style={{ fontWeight: "bold", textDecoration: "none" }}
          onClick={() => {
            window.location = "/signin";
          }}
        >
          Log in
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
