const puppeteer = require("puppeteer")

async function start() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://jp.supreme.com/collections/all")
  await browser.close()
}

start()
