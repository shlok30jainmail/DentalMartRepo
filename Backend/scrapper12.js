const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data12 = {
    list12: []
}

const scrapeChannel12 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData12 = await page.evaluate(async (data12) => {
        const items = document.querySelectorAll('#main-collection-product-grid > div.products-grid.product-search.row.product-collection > div')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            const name = item.querySelector('#main-collection-product-grid > div.products-grid.product-search.row.product-collection > div> div > div > div.product-bottom > a > span') && item.querySelector('#main-collection-product-grid > div.products-grid.product-search.row.product-collection > div> div > div > div.product-bottom > a > span').innerText;
            const link = item.querySelector('#main-collection-product-grid > div.products-grid.product-search.row.product-collection > div> div > div > div.product-bottom > a > span') && item.querySelector('#main-collection-product-grid > div.products-grid.product-search.row.product-collection > div> div > div > div.product-bottom > a > span').href;

            const price = item.querySelector('#main-collection-product-grid > div.products-grid.product-search.row.product-collection > div > div > div > div.product-bottom > div.price-box > div > span > span') && item.querySelector('#main-collection-product-grid > div.products-grid.product-search.row.product-collection > div > div > div > div.product-bottom > div.price-box > div > span > span').innerText;
            const image = item.querySelector('#main-collection-product-grid > div.products-grid.product-search.row.product-collection > div > div > div > div.product-top > div.product-image > a > picture > img') && item.querySelector('#main-collection-product-grid > div.products-grid.product-search.row.product-collection > div > div > div > div.product-top > div.product-image > a > picture > img').srcset;
            data12.list12.push({
                name: name,
                price: price,
                image: image,
                link:link
            })
        })

        return data12
    }, data12)
    // console.log(ProductData12);
    await browser.close()
    return ProductData12;

};
module.exports = { scrapeChannel12 }

// scrapeChannel(url);

