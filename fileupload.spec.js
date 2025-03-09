const {test,expect}= require("@playwright/test")
test("file upload", async function({page}){

await page.goto("https://the-internet.herokuapp.com/upload")
//to upload only 1 file to the browser from the location.
await page.locator("//input[@id='file-upload']").setInputFiles("/Users/LENOVO/Desktop/flower.jfif")
//to upload only more then 1 file to the browser from the location.
await page.locator("//input[@id='file-upload']").setInputFiles(["/Users/LENOVO/Desktop/flower.jfif","/Users/LENOVO/Desktop/flower.jfif"])
await page.click("//input[@class='button']")
await page.waitForURL("https://the-internet.herokuapp.com/upload")
const txt=await page.locator("//div[@id='uploaded-files']").textContent()

console.log(txt)

})

//PS C:\Users\LENOVO\Desktop\Testing\Playwright> npx playwright test ./tests/fileupload.spec.js --headed --project="chromium"  --- 
//command if want to run the file only in chromium or any other browser