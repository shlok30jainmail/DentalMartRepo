const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data4 = {
    list4: []
}

const scrapeChannel4 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData4 = await page.evaluate(async (data4) => {
        const items = document.querySelectorAll('#category_list > div > div > li')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            // const id = item.getAttribute('div[data-id]')
            const name = item.querySelector('.product-name') && item.querySelector('.product-name').innerText;
            const link = item.querySelector('.product-name') && item.querySelector('.product-name').href;
            const image = item.querySelector('.product-item-photo > span > span > img') && item.querySelector('.product-item-photo > span > span > img').src;
            data4.list4.push({
                name: name,
                price: 0,
                image: image,
                link:link
            })
        })

        return data4
    }, data4)
    // console.log(ProductData4);
    await browser.close()
    return ProductData4;
    
};
module.exports = { scrapeChannel4 }

// scrapeChannel(url);

