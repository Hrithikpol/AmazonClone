const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { Card } = require("@mui/material");
const stripe = require("stripe")(
  "sk_test_51KyWM7SA4tl92AB51NJWNtUB6JDeCjBnKAsyeCqESUDKUwK666aves7I3uZHqpkJn87Xgnz4DEk5qtoJJ0AragI0003ziJor0M"
);

//API

//-API config
const app = express();
//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-listen command
exports.api = functions.https.onRequest(app);
//example endpoint
//http://localhost:5001/clone-d9eb9/us-central1/api
