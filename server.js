// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/chat", async (req, res) => {
  const message = (req.body.message || "").toLowerCase();

  let reply = "I can help with flights, prices, destinations, and booking.";

  if (message.includes("hello") || message.includes("hi")) {
    reply = "Hello! Where would you like to travel?";
  } else if (message.includes("london")) {
    reply = "Flights to London cost around AED 2850 and take about 7h 30m.";
  } else if (message.includes("paris")) {
    reply = "Flights to Paris cost around AED 3150 and take about 7h 10m.";
  } else if (message.includes("bangkok")) {
    reply = "Flights to Bangkok cost around AED 2450 and take about 6h 45m.";
  } else if (message.includes("dubai")) {
    reply = "Dubai flights are short, around 1 hour, and cost about AED 500.";
  } else if (message.includes("new york") || message.includes("newyork")) {
    reply = "Flights to New York cost around AED 4200 and take about 14 hours.";
  } else if (message.includes("istanbul")) {
    reply = "Flights to Istanbul cost around AED 1800 and take about 5 hours.";
  } else if (message.includes("price") || message.includes("cost")) {
    reply = "Prices range from AED 500 to AED 4200 depending on destination.";
  }

  res.json({ reply });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
