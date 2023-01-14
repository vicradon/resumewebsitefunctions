const express = require("express");
const app = express();

const { createCanvas } = require("canvas");

app.get("/", (req, res) => {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext("2d");

  ctx.font = "48px Impact";
  ctx.fillText("Hello, OG World!", 50, 100);

  const imageBuffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": imageBuffer.length,
  });
  res.end(imageBuffer);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
