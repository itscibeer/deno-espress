import express from "npm:express@4";

const app = express();
const PORT = 5000;
app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
