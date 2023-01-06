const express = require("express");
const puppeteer = require("puppeteer");

const studentsRoutes = express.Router();

studentsRoutes.get("/students/records", async (request, response) => {
  const studentAuth = request.body;
  console.log("STUDENT DATA: ", studentAuth);

  try {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();

    await page.goto("https://o6u.edu.eg/default.aspx?id=70");

    console.log(await page.content());

    await browser.close();
  } catch (err) {
    console.log("ERRORR OCCURED...");
    console.log(err);
  }

  response.end("TEST");
});

module.exports = { studentsRoutes };
