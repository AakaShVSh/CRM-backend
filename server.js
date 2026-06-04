require("dotenv").config();
const app = require("./src/app");
const port = process.env.PORT || 5000;
const connect = require("./src/configs/db");

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log("running on port", port);
  } catch (error) {
    console.log(error);
  }
});
