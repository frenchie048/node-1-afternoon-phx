const express = require("express");
const bodyParser = require("body-parser");
const mC = require("./controllers/messages_controller")
const app = express();

app.use(bodyParser.json());
app.use(express.static("../public/build"))

app.get("/api/messages", mC.read);

app.put("/api/messages/:id", mC.update);

app.post("/api/messages", mC.create);

app.delete("/api/messages/:id", mC.delete);



const port = 3001;
app.listen(3001, console.log(`Server is listening on port ${port}`));