require("@babel/register")({
  //  presets: ["es2015", "react"]
});
const express = require("express");
const path = require("path");

// const React = require("react");
// const { renderToString } = require("react-dom/server");

// const PhotoGalleryContainer = require("./src/js/client/components/container/PhotoGalleryContainer.js");
// // const SSRTest = require("./src/js/client/components/container/SSRTest.js");

// const app = express();
// const PORT = process.env.PORT || 8084;

// app.use(express.static(path.resolve(__dirname, "public")));

// app.get("/", (req, res) => {
//   // const appString = renderToString(React.createElement(PhotoGalleryContainer));
//   const appString = renderToString(PhotoGalleryContainer);

//   // const appString = renderToString(React.createElement(SSRTest));
//   // const appString = renderToString(SSRTest);

//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.send(htmlTemplate("photoGallery", appString));
// });

// app.listen(PORT, () => {
//   console.log(`listening on PORT ${PORT}`);
//   console.log("Press Ctrl+C to quit.");
// });

// function htmlTemplate(title, appDom) {
//   return `
//       <!DOCTYPE html>
//       <html>
//       <head>
//           <meta charset="utf-8">
//           <title>${title}</title>
//       </head>

//       <body>
//           <div id="app">${appDom}</div>
//           <script src="./app.bundle.js"></script>
//       </body>
//       </html>
//   `;
// }

/* *********************** */

const app = express();
const PORT = process.env.PORT || 8084;

app.use(express.static(path.join(__dirname, "public")));
//app.view('view engine','pug')

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
