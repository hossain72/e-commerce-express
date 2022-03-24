const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const userRoute = require("./routes/user.route");

const db =
  "mongodb+srv://example:1234567890@cluster0.vzky2.mongodb.net/e-commerce?retryWrites=true&w=majority";

const ecommerceDB = require("mongoose");

main().catch((error) => console.log(error));

async function main() {
  await ecommerceDB.connect(db);
  console.log("connected");
}

app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
