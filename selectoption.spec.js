const{test,expect}= require("@playwright/test")
const { TIMEOUT } = require("dns/promises")
const { threadId } = require("worker_threads")

test("select 1 option from dopdown", async function({page}){

    await page.goto("https://www.facebook.com/")
    const tit= await page.title("")
    console.log(tit)
    await page.locator("//a[@href='https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzQwODI0MDM0LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login&next']").hover()
    await page.waitForTimeout(1000)
    await page.click("//a[@data-testid='open-registration-form-button']")
    await page.waitForTimeout(1000)

    await page.waitForURL("https://www.facebook.com/r.php?entry_point=login")
    const tet = await page.title("")
    await page.fill("//input[@name='firstname']","Aniket")
    await page.waitForTimeout(1000)
    await page.fill("//input[@name='lastname']","Thakre")
    await page.waitForTimeout(1000)
    await page.locator("//select[@title='Day']").selectOption('18')
    await page.waitForTimeout(1000)
    await page.locator("//select[@title='Month']").selectOption('11')
    await page.waitForTimeout(1000)
    await page.locator("//select[@title='Year']").selectOption('1996')
    await page.waitForTimeout(1000)
    const vlaue= await page.locator("//select[@title='Month']").textContent()
    console.log("value is "+vlaue)
  await page.locator("//input[@value='2']").click()
  await page.waitForTimeout(1000)
  await page.fill("//input[@aria-label='Mobile number or email address']","7420026573")
  await page.waitForTimeout(1000)
  await page.fill("//input[@aria-label='New password']","Password@123465")
  await page.waitForTimeout(1000)
  await page.click("//button[@type='submit']")
  

  await page.waitForURL("https://www.facebook.com/confirmemail.php?next=https%3A%2F%2Fwww.facebook.com%2F%3Flsrc%3Dlbr&__req=i")
  await page.waitForTimeout(1000)
  await page.fill("//input[@name='code]","123456")
  await page.waitForTimeout(1000)
  await page.click("//button[@name='confirm']")
  await page.waitForTimeout(1000)
    
     
    

})