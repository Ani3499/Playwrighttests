const{test,expect}=require("@playwright/test")

test("Handle multiple tabs", async ({browser}) =>{

    const context= await browser.newContext()

    const page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.waitForLoadState("networkidle")  

    const [newPage]= await Promise.all([
                            context.waitForEvent("page") ,
                            page.locator("(//a[@href='https://www.facebook.com/groups/256655817858291'])[1]").click(),
                           

                      ])
    await newPage.waitForLoadState("networkidle")              
               

})