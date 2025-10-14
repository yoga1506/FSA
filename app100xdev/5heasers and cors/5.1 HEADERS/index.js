// import axios from "axios";

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data);
//   document.getElementById("post").innerHTML = data.title;
// }
// getData();

// same using axios

// async function getDataUsingAxios() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   const arr = res.data;
//   console.log(arr);

//   for (let i = 0; i < arr.length; i++) {
//     document.getElementById("posts").innerHTML +=
//       "<div>" + arr[i].title + "</div>";
//   }
// }

//  assignment

// const express = require("express");

//  creating a express server
/*
const express = require("express");

const app = express();
app.get("/add", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
  });
});

app.listen(3000);
*/

//same using param like /add/10/14 without using /add/?a=10&b=14

const express = require("express");

const app = express();
app.get("/add/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    answer: a + b,
  });
});
app.listen(3000);
