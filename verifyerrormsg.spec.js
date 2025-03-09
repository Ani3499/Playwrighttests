const{test,expect}= require('@playwright/test')

test("Error Message",async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/")
    await page.fill('//input[@name="username"]',"Admin",)
    await page.fill('//input[@name="password"]',"11aeadf23")
    await page.click("//button[@type='submit']")
    const errormsg= await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
     console.log(errormsg)
      expect(errormsg.includes("Invalid credentials")).toBeTruthy()    // to verify the error mesage to be true
      expect(errormsg.includes("Invalid credentiaals")).toBeFalsy()    // to verify the error mesage to be false
    
})