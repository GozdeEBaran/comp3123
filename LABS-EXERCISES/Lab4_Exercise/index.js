const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

/**
 * GET /hello
 * -> plain text "Hello Express JS"
 */
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

/**
 * GET /user
 */
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Gozde ";
  const lastname = req.query.lastname || "Baran";
  res.json({ firstname, lastname });
});

/**
 * POST /user/:firstname/:lastname
 * Path params: /user/John/Doe
 */
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

/**
 * POST /users
 * Body: array of { firstname, lastname }
 * Accepts either:
 *   [ {firstname, lastname}, ... ]
 * or
 *   { "users": [ ... ] }
 */
app.post("/users", (req, res) => {
  let users = [];
  if (Array.isArray(req.body)) {
    users = req.body;
  } else if (Array.isArray(req.body?.users)) {
    users = req.body.users;
  } else {
    return res.status(400).json({
      error:
        'Expected an array of users in request body, e.g. [{ "firstname":"Gozde","lastname":"Baran" }], or { "users": [ ... ] }',
    });
  }
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
