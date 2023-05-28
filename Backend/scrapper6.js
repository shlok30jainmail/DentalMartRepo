const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data6 = {
    list6: []
}

const scrapeChannel6 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData6 = await page.evaluate(async (data6) => {
        const items = document.querySelectorAll('#mf-shop-content > ul > li> div')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            const name = item.querySelector('#mf-shop-content > ul > li> div > div.mf-product-details > div.mf-product-details-hover > h2 > a') && item.querySelector('#mf-shop-content > ul > li> div > div.mf-product-details > div.mf-product-details-hover > h2 > a').innerText;
            const link = item.querySelector('#mf-shop-content > ul > li> div > div.mf-product-details > div.mf-product-details-hover > h2 > a') && item.querySelector('#mf-shop-content > ul > li> div > div.mf-product-details > div.mf-product-details-hover > h2 > a').link;

            const price = item.querySelector('#mf-shop-content > ul > li > div > div.mf-product-details > div.mf-product-price-box > span>span') && item.querySelector('#mf-shop-content > ul > li > div > div.mf-product-details > div.mf-product-price-box > span>span').innerText;
            const image = item.querySelector('#mf-shop-content > ul > li > div > div.mf-product-thumbnail > a > img') && item.querySelector('#mf-shop-content > ul > li > div > div.mf-product-thumbnail > a > img').src;
            data6.list6.push({
                name: name,
                price: price,
                image: image,
                link:link
            })
        })

        return data6
    }, data6)
    // console.log(ProductData6);
    await browser.close()
    return ProductData6;

};
module.exports = { scrapeChannel6 }

// scrapeChannel(url);

