const express = require("express");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");

const sequelize = require("./utils/dataBase");
const resolver = require("./graphql/resolver");
const schema = require("./graphql/schema");

const serverRun = require("./helper/serverRun");
const config = require("./config");

const app = express();

const { PORT } = config;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.use((req, res, next) => {
  res.sendFile("./index.js");
});

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT || 5000, () => {
      console.log(serverRun(PORT));
    });
  } catch (e) {
    console.log(e);
  }
}

start();
