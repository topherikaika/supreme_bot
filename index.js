const puppeteer = require("puppeteer")
const rand_url = "https://jp.supreme.com/products/_l6uhoinj2j2cf99"

async function start() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(rand_url)
  await page.click('#size-7700781301964', { clickCount: 1 })
  const value = '42719321915596'
  await page.select('#size-7700781301964', value)
  return page
}

async function addToCart(page) {
  await page.$eval("button[class='button button--default fontWeight-bold bpS-button--s width-100 bg-red--aa c-white']", elem.click())
}

async function checkout() {
  const page = await start()
  await addToCart(page)
}

start()
