import React, { useState } from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  async function githubUserProfileData() {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const userProfileData = await res.json();
    console.log(userProfileData);
  }

  function handleSearch() {}

  useEffect(() => {
    githubUserProfileData();
  }, []);

  return (
    <>
      <div className="container">
        <Card style={{ padding: 30, width: 900, height: 570 }}>
          <Typography
            variant="h3"
            textAlign={"center"}
            style={{
              marginBottom: "25px",
              fontWeight: 700,
              color: "#5e057e",
            }}
          >
            GitHub Profile Details
          </Typography>
          <div className="searchbar">
            <div className="searchtextbox">
              <TextField
                style={{ marginRight: 10 }}
                className="textbox"
                id="outlined-basic"
                label="Enter GitHub username here"
                variant="outlined"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                onKeyDown={githubUserProfileData()}
              />
              <Button
                onClick={handleSearch}
                variant="contained"
                style={{
                  fontWeight: 600,
                  backgroundColor: "#5e057e"
                }}
              >
                Search Profile
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
