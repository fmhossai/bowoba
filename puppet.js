const puppeteer = require("puppeteer")

async function meow(){
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    // await page.goto("https://tracker.gg/valorant")
    // await page.click("input")
    // await page.keyboard.type("Ryuikoo#NA1")
    // await page.keyboard.press("Enter")
    await page.setViewport({
        width:1920,
        height:1080
    })
    await page.goto("https://tracker.gg/valorant/profile/riot/Ryuikoo%23NA1")
    await page.waitForSelector("a.match__link")
    await page.click("a.match__link")
    await page.waitForNavigation()
    await page.waitForSelector("span.trn-ign__username")
    const heh3 = await page.$x("//span[text()='Ryuikoo']")
    console.log(await page.evaluate(he => he.textContent, heh3[0]))
    await page.screenshot({path:'./image.jpg', type: 'jpeg'})
    await heh3[0].click()
    await page.waitForSelector("span.stat__value")
    const heh = await page.$$('span.stat__value')
    const score = await page.evaluate(el => el.textContent, heh[0])
    const kda = await page.evaluate(el=>el.textContent, heh[1])
    console.log(`Score is ${score}`)
    console.log(`KDA is ${kda}`)

    browser.close()
}

meow()