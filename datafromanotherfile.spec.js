const{test,expect}= require("@playwright/test")

const testdata = JSON.parse(JSON.stringify(require("../datafile.json")))   // to use JSON file for data  

test.describe("Datadriven", function()
{
for (const data of testdata)
    {
        test.describe(`loggin scenario ${data.id}`, function(){
            test("Data from json file",async function({page}){

                await page.goto("https://freelance-learn-automation.vercel.app/login")
                await page.getByPlaceholder('Enter Email').fill(data.Email)
                await page.getByPlaceholder('Enter Password').fill(data.Password)
                
                await page.click("//button[@type='submit']")
            
                const t= await page.locator("//h2[@class='errorMessage']").textContent()
                console.log(t)
            
              //expect(t.includes("USER Email Doesn't Exist")).toBeTruthy()
               
            


        })
})
    
}
})

//test("Data from json file",async function({page}){

    /*await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder('Enter Email').fill(testdata.Email)
    await page.getByPlaceholder('Enter Password').fill(testdata.Password)
    
    await page.click("//button[@type='submit']")

    const t= await page.locator("//h2[@class='errorMessage']").textContent()
    console.log(t)

  expect(t.includes("USER Email Doesn't Exist")).toBeTruthy()*/
   


//})