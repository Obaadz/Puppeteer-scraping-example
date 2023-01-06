const express = require("express");
const puppeteer = require("puppeteer");

const globallyRoutes = express.Router();

globallyRoutes.get("/", async (request, response) => {
  try {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();

    await page.goto("https://twitter.com/jack/status/20");
    await page.waitForNetworkIdle();
    const firstTweet = await page.evaluate(() => {
      return document.querySelector('div[data-testid="tweetText"]').textContent;
    });

    await browser.close();

    response.end("First Tweet: " + firstTweet);
  } catch (err) {
    console.log("ERRORR OCCURED...");
    console.log(err);
    response.end("Error...");
  }
});

module.exports = { globallyRoutes };
