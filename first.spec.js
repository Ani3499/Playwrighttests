const{test,expect} =require('@playwright/test')   // for using node modules to import , 
// test- test function is to declare the test 
// expect- except function is used to write assertions 
// require- is used to import the modules or local files

/*test("My fist test",async function({page}){     
    expect(12).toBe(12)
})
// My first test - is the title
//async - promises
//page - fixture used to automatee the application

test ("my second test",async function({page}){
    expect(101).toBe(12)     // toBe - checks/compare the value expected and required
})

test ("my third test",async function({page}){
    expect(13).toBe(13)
})

//only will do- only execute the forth test
test.only("my forth test",async function({page}){
    expect("my name aniket thakre").toContain("aniket")   // toContain - checks if the word or letter contains or not
}) 


//skip wil do skip the test ex:-
     
test.skip ("my fifth test",async function({page}){
     expect(13).toBe(13)
 }) 

//   to test boolian
test("my sixth test",async function({page}){
    expect(true).toBeTruthy()
    expect(false).toBeFalsy() 

}) 

test("my seventh test", async function({page}){
    expect("my name ".includes("name")).toBeFalsy()    // test will fail
    expect("my name ".includes("name")).toBeTruthy()    // test will pass
}) */