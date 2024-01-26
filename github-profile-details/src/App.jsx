import React, { useState } from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import UserData from "./user";
import "./App.css";

function App() {
  const [username, setUsername] = useState("ayushmanyd");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function githubUserProfileData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const userProfileData = await res.json();
    console.log(userProfileData);

    if (userProfileData) {
      setUserData(userProfileData);
      setLoading(false);
      setUsername('');
    }
  }

  function handleSearch() {
    githubUserProfileData();
  }

  useEffect(() => {
    githubUserProfileData();
  }, []);

  if(loading) {
    return
  }

  return (
    <>
      <div className="container">
        <Card style={{ padding: 30, width: 900, height: 'auto', border: '5px' }}>
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
              />
              <Button
                onClick={handleSearch}
                variant="contained"
                style={{
                  fontWeight: 600,
                  backgroundColor: "#5e057e",
                }}
              >
                Search Profile
              </Button>
            </div>
          </div>
          <div className="userdata">
            {userData !== null ? <UserData user={userData} /> : null}
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
