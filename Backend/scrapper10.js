const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data10 = {
    list10: []
}

const scrapeChannel10 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData10 = await page.evaluate(async (data10) => {
        const items = document.querySelectorAll('#content > div.row.main-products.product-grid > div')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            const name = item.querySelector('#content > div.row.main-products.product-grid > div> div > div.product-details > div.caption > h4 > a') && item.querySelector('#content > div.row.main-products.product-grid > div> div > div.product-details > div.caption > h4 > a').innerText;
            const link = item.querySelector('#content > div.row.main-products.product-grid > div> div > div.product-details > div.caption > h4 > a') && item.querySelector('#content > div.row.main-products.product-grid > div> div > div.product-details > div.caption > h4 > a').href;
            
            const price = item.querySelector('#content > div.row.main-products.product-grid > div> div > div.product-details > div.caption > p.price') && item.querySelector('#content > div.row.main-products.product-grid > div> div > div.product-details > div.caption > p.price').innerText;
            const image = item.querySelector('#content > div.row.main-products.product-grid > div > div > div.image > a > img') && item.querySelector('#content > div.row.main-products.product-grid > div > div > div.image > a > img').src;
            data10.list10.push({
                name: name,
                price: price,
                image: image,
                link:link
            })
        })

        return data10
    }, data10)
    // console.log(ProductData10);
    await browser.close()
    return ProductData10;

};
module.exports = { scrapeChannel10 }

// scrapeChannel(url);

