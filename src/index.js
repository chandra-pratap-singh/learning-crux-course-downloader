const puppeteer = require("puppeteer");
const constants = require("./const.js");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(constants.URL);
  const videoUrls = await page.evaluate(() => {
    addresses = [];
    list = document.getElementsByClassName("panel-title fw-normal");
    for (var i = 0; i < list.length; i++) {
      addresses.push(list[i].children[0].href.replace("video", "play"));
    }
    return addresses;
  });
  console.log(videoUrls);
  for (var i = 0; i < videoUrls.length; i++) {
    try {
      await page.goto(videoUrls[i]);
    } catch {}
    console.log("Downloading Video Number - ", i, " of ", videoUrls.length);
    await page.waitFor(constants.TIME_DELAY);
  }
})();
