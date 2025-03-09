const{test,expect}= require ("@playwright/test")

test("Frames ",async function({page}){

    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    const f= await page.frameLocator("//frame[@name='classFrame']")
    await f.locator("//a[text()='java.applet']").click()
})