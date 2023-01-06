<div>
  <h1>Puppeteer Scraping Example</h1>
  <p>
    This project demonstrates how to use
    <a href="https://github.com/puppeteer/puppeteer" target="_new">Puppeteer</a> to scrape
    data from the web.
  </p>
  <h2>Prerequisites</h2>
  <ul>
    <li><a href="https://nodejs.org/en/" target="_new">Node.js</a></li>
    <li><a href="https://expressjs.com/" target="_new">Express.js</a></li>
    <li>
      <a href="https://www.npmjs.com/" target="_new">NPM</a> (usually comes with Node.js)
    </li>
  </ul>
  <h2>Installation</h2>
  <ol>
    <li>Clone the repository.</li>
  </ol>
  <pre><div><div><code>git <span>clone</span> https://github.com/Obaadz/puppeteer-scraping-example.git
</code></div></div></pre>
  <ol start="2">
    <li>Install the dependencies.</li>
  </ol>
  <pre><div><div><code><span>cd</span> puppeteer-scraping-example
npm install
</code></div></div></pre>
  <h2>Usage</h2>
  <p>To start the server, run the following command:</p>
  <pre><div><div><code>npm start
</code></div></div></pre>
  <p>
    The server will start on port 3000. To access the endpoint, make a GET request to
    <code>http://localhost:3000/v1</code>. The response will include the text of the first tweet from Twitter.
  </p>
</div>
