const { createCanvas, loadImage } = require("canvas");
// const azure = require("azure-storage");

module.exports = async function (context, req) {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext("2d");

  ctx.font = "48px Impact";
  ctx.fillText("Hello, OG World!", 50, 100);

  const imageBuffer = canvas.toBuffer();

  // const blobService = azure.createBlobService();
  // blobService.createBlockBlobFromText(
  //   "mycontainer",
  //   "og-image.png",
  //   imageBuffer,
  //   {
  //     contentType: "image/png",
  //   },
  //   function (error, result, response) {
  //     if (!error) {
  //       console.log("OG image created and uploaded to Azure Blob storage.");
  //     }
  //   }
  // );

  context.res = {
    status: 202,
    // body: imageBuffer,
    body: "stuff",
    headers: {
      "Content-Disposition": "inline",
    },
  };
};
