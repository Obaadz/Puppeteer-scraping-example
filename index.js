import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";

const PORT = 5000;

const app = express();
const bodyParser = {
  urlencoded: express.urlencoded({ limit: "30mb", extended: true }),
  json: express.json({ limit: "30mb" }),
};

app.use(bodyParser.urlencoded);
app.use(bodyParser.json);
app.use(cors());

app.listen(PORT, async () => {
  console.log(`Listening on port: ${PORT}`);

  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  await page.goto("https://o6u.edu.eg/default.aspx?id=70");
  console.log(await page.content());
  await browser.close();
});

export default app;
