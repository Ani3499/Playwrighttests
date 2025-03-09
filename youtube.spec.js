// Tests the youtube application


const {test,expect, selectors} = require("@playwright/test")

test("check youtube url",async function({page}){
    await page.goto("https://www.youtube.com/")
    const t= await page.title()
    console.log(t)

})