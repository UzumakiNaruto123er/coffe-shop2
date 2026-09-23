const http = require("http");
const req = http.get("http://[::1]:3008/", (res) => {
  console.log("STATUS:", res.statusCode);
  res.on("data", (chunk) => {
    console.log("BODY:", chunk.toString().substring(0, 200));
  });
}).on("error", (e) => {
  console.error("Error:", e.message, e.code);
});