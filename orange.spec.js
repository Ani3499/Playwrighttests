

const{test,expect} = require("@playwright/test")

test("Test",async function ({page}){

await page.goto("https://opensource-demo.orangehrmlive.com/")
const t = await page.title("")
console.log(t)
await page.fill('//input[@name="username"]',"Admin",)
await page.fill('//input[@name="password"]',"admin123")
await page.click("//button[@type='submit']")
await expect(page).toHaveTitle("OrangeHRM")
await page.getByAltText("profile picture")
await page.click("//img[@alt='profile picture']")
await page.locator("//a[@href='#']")
await page.click("//a[@href='#']")
await page.locator("//div[@class='orangehrm-about-text']")
const tt= await page.textContent("//p[@class='oxd-text oxd-text--p orangehrm-about-text']")
console.log(tt)

})