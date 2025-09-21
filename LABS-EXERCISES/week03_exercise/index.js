var http = require("http");
//TODO - Use Employee Module here
const employeeModule = require("./Employee");
console.log("Lab 03 -  NodeJs");

//Define Server Port
const port = process.env.PORT || 8081;

function writeJson(res, statusCode, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    writeJson(res, 405, { error: http.STATUS_CODES[405] });
  } else {
    if (req.url === "/") {
      writeJson(res, 200, { message: "<h1>Welcome to Lab Exercise 03</h1>" });
    }

    if (req.url === "/employee") {
      writeJson(res, 200, employeeModule.getAll());
    }

    if (req.url === "/employee/names") {
      writeJson(res, 200, employeeModule.getNamesAscending());
    }
  }

  if (req.url === "/employee/totalsalary") {
    writeJson(res, 200, { total_salary: employeeModule.getTotalSalary() });
  } else {
    writeJson(res, 404, { error: http.STATUS_CODES[404] });
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
