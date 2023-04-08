const puppeteer = require("puppeteer")
const rand_url = "https://jp.supreme.com/collections/all"

async function start() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(rand_url)
  await page.click(".button button--default fontWeight-bold bpS-button--s width-100 bg-red--aa c-white")
  return page
}

async function addToCart() {

}


start()
