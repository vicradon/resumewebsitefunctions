const { createCanvas, loadImage } = require("canvas");

module.exports = async function (context, req) {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext("2d");

  ctx.font = "48px Impact";
  ctx.fillText("Hello, OG World!", 50, 100);

  const imageBuffer = canvas.toBuffer();

  context.res = {
    status: 202,
    body: imageBuffer,
    headers: {
      "Content-Disposition": "inline",
    },
  };
};
