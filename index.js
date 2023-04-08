const puppeteer = require("puppeteer")
const rand_url = "https://jp.supreme.com/collections/all"

async function start() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(rand_url)
  await page.click(".button button--default fontWeight-bold bpS-button--s width-100 bg-red--aa c-white")
  await browser.close()
}

start()
