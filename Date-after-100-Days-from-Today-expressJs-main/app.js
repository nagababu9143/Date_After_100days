const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const addDays = require("date-fns/addDays");

  const getDateAfterXDays = (days) => {
    const newDate = addDays(new Date(), days);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  };
  response.send(getDateAfterXDays(100));
});

module.exports = app;
