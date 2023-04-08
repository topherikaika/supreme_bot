const puppeteer = require("puppeteer")
const rand_url = "https://jp.supreme.com/collections/all"

async function start() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(rand_url)
  return page
}

async function addToCart(page) {
  await page.$eval("button[class='button button--default fontWeight-bold bpS-button--s width-100 bg-red--aa c-white']", elem.click())
}

async function checkout() {
  const page = await start()
  await addToCart(page)
}

//start()
