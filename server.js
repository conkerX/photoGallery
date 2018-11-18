const path = require("path");
const express = require("express");
const cors = require("cors");

const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const serialize = require("serialize-javascript");
const axios = require("axios");
const fetchRepos = require("./services/api").default;
const SSRTest = require("./src/js/client/components/container/SSRTest.js")
  .default;

const app = express();
const PORT = process.env.PORT || 8084;

app.use(cors());
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  fetchRepos().then(data => {
    const markup = renderToString(<SSRTest data={data} />);

    res.send(`<!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>SSR with React</title>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
      </head>
          
      <body>
          <div id="app">${markup}</div>
          <script src="/static/js/public.js" defer></script>
      </body>
      </html>`);
  });
});

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

/* *********************** */

// const app = express();
// const PORT = process.env.PORT || 8084;

// app.use(express.static(path.join(__dirname, "public")));
// //app.view('view engine','pug')

// app.listen(PORT, () => {
//   console.log(`listening on PORT ${PORT}`);
//   console.log("Press Ctrl+C to quit.");
// });
