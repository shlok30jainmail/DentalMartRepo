const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data7 = {
    list7: []
}

const scrapeChannel7 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData7 = await page.evaluate(async (data7) => {
        const items = document.querySelectorAll('#main > div > div > ul > li')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            const name = item.querySelector('#main > div > div > ul >li> div > div > a > h2') && item.querySelector('#main > div > div > ul >li> div > div > a > h2').innerText;
            const link = item.querySelector('#main > div > div > ul >li> div > div > a > h2') && item.querySelector('#main > div > div > ul >li> div > div > a > h2').href;

            const price = item.querySelector('#main > div > div > ul > li > div > div > a > span') && item.querySelector('#main > div > div > ul > li > div > div > a > span').innerText;
            const image = item.querySelector('#main > div > div > ul > li > div > a > div > img') && item.querySelector('#main > div > div > ul > li > div > a > div > img').src;
            data7.list7.push({
                name: name,
                price: price,
                image: image,
                link:link
            })
        })

        return data7
    }, data7)
    // console.log(ProductData7);
    await browser.close()
    return ProductData7;

};
module.exports = { scrapeChannel7 }

// scrapeChannel(url);

