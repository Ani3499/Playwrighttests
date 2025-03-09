const{test,expect}= require("@playwright/test")



//test for alert testing
test.skip("Handle alert" ,async ({page}) => {

    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    await page.waitForTimeout(1000)
  //for alert we have to provide the  page.on assertion
    page.on("dialog",async (d) => {

        expect(d.type()).toContain("alert")
        await page.waitForTimeout(1000)
        expect(d.message()).toContain("I am an alert box!")
        console.log(d.message())
        await d.accept()
    })

    await page.click("//input[@type='button']")
})

// test fo confirm testing

test.skip("Handle confirm", async ({page}) => {

    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

    //for confirm we have to provide the  page.on assertion

    page.on("dialog" ,async (con) => {
     expect(con.type()).toContain("confirm")
     expect(con.message()).toContain("I am a confirm alert")
     console.log(con.message())

     await con.accept()

    })

    await page.click("//input[@id='confirmexample']")

})

// test fo prompt testing

test("Handle prompt", async ({page}) => {

    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

    //for prompt we have to provide the  page.on assertion

    page.on("dialog" ,async (dialogwindow) => {
     expect(dialogwindow.type()).toContain("prompt")
     expect(dialogwindow.message()).toContain("I prompt you")
     console.log(dialogwindow.message())

     await dialogwindow.accept("Aniket")

    })

    await page.locator("//input[@id='promptexample']").click()
    

})
