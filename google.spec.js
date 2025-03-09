
/*const {test,expect} =require("@playwright/test")
const { log } = require("console")

test("Google url",async function({page}){
 
    await page.goto("https://www.google.com/")     // it will got to the url https://www.google.com/ 
    const url= await page.url()                    // it will provide the url of google and save in url variable
    console.log("URL is "+url)                     //print the url in stdout and in console
    const title= await page.title()                // it will provide the title of google and save in title variable
    console.log("title is  " +title )              //print the url in stdout and in console
    await expect(page).toHaveTitle("Google")       // checks the title if it is Google or not 

                                                 /* if else checks the title is google if yes then print its true
                                                   else it will print its false   */
   /* if (title == "Google")
        {
    console.log("its true")
      }
    else{
        console.log("its false")
    }
}) */





