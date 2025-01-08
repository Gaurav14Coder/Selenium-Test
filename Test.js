// Import Selenium WebDriver
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function googleSearch() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Step 1: Navigate to Google
    await driver.get('https://www.google.com');

    // Step 2: Find the search bar and input "browserstack.com"
    let searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('browserstack.com', Key.RETURN);

    // Step 3: Wait for search results to load
    await driver.wait(until.elementLocated(By.id('search')));

    // Step 4: Click the first search result
    let firstResult = await driver.findElement(By.css('h3'));
    await firstResult.click();

    // Optionally, wait for some time to observe the result
    await driver.sleep(5000);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
