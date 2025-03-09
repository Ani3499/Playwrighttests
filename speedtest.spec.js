const{test,expect} = require("@playwright/test")

test("Speedtest",async function({page}){

    await page.goto("https://www.youtube.com/")
    const t= await page.title()
    console.log(t)
    
    await page.click("//a[@tabindex='3']")
    
    await page.waitForSelector("//div[@class='result-label']")
    const p= await page.content("")
    console.log(p)
})