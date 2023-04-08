const puppeteer = require("puppeteer")

async function start() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
}

start()
