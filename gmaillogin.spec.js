// First loging Test in Gmail 

const{test,expect}= require("@playwright/test");


test("Loggin Gmail",async function({page}){
// Step 1: Navigate to Gmail login page
await page.goto('https://accounts.google.com/ServiceLogin');

// Step 2: Enter email
await page.fill('input[type="email"]', 'aniketthakre3499@gmail.com');  // Replace with your email
await page.click('#identifierNext'); // Click "Next" after entering the email

// Step 3: Wait for password field
await page.waitForSelector('input[type="password"]'); // Wait for the password input to show up

// Step 4: Enter password
await page.fill('input[type="password"]', 'Thakre@3499');  // Replace with your password
await page.click('#passwordNext'); // Click "Next" after entering the password

// Step 5: Wait for the inbox to load (confirm successful login)
await page.waitForSelector('div[aria-label="Inbox"]');  // Adjust if necessary based on the Gmail UI

console.log('Login successful!');

})