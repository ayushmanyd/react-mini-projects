import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [isShown, setIsShown] = useState(false);
  const [qrCode, setQRCode] = useState("");
  const [inputText, setInputText] = useState("");

  function generateQrCode() {
    setIsShown((current) => !current);
    setQRCode(inputText);
    // inputText("");
  }

  return (
    <>
      <div className="navbar">
        <Typography>
          <h1>
            <a
              href="http://localhost:5173/"
              style={{
                fontSize: "3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              QR Code Generator
            </a>
          </h1>
        </Typography>
      </div>
      <div className="container">
        <div className="app">
          <div className="top">
            <TextField
              onChange={(event) => setInputText(event.target.value)}
              sx={{ width: 600 }}
              id="outlined-basic"
              label="Enter Text Here"
              variant="outlined"
            />
            <Button
              disabled={inputText && inputText.trim() !== "" ? false : true}
              onClick={generateQrCode}
              sx={{ width: 200 }}
              variant="contained"
            >
              Generate QR Code
            </Button>
          </div>
          {isShown && (
            <div>
              <div className="genQRCode">
                <p className="genQR">Generated QR Code</p>
              </div>
              <div className="qrcode">
                <QRCode
                  id="qr-code-text"
                  value={qrCode}
                  size={300}
                  bgColor="white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
