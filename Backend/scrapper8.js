const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data8 = {
    list8: []
}

const scrapeChannel8 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData8 = await page.evaluate(async (data8) => {
        const items = document.querySelectorAll('#product-wrapper > ol > li')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            const name = item.querySelector('#product-wrapper > ol > li> div.product.details.product-item-details > h5 > a') && item.querySelector('#product-wrapper > ol > li> div.product.details.product-item-details > h5 > a').innerText;
            const link = item.querySelector('#product-wrapper > ol > li> div.product.details.product-item-details > h5 > a') && item.querySelector('#product-wrapper > ol > li> div.product.details.product-item-details > h5 > a').href;
            const price = item.querySelector('#product-wrapper > ol > li> div.product.details.product-item-details > div.price-box.price-final_price > span.special-price > span') && item.querySelector('#product-wrapper > ol > li> div.product.details.product-item-details > div.price-box.price-final_price > span.special-price > span').innerText;
            const image = item.querySelector('#product-wrapper > ol > li> div.product-top > a > img') && item.querySelector('#product-wrapper > ol > li> div.product-top > a > img').src;
            data8.list8.push({
                name: name,
                price: price,
                image: image,
                link:link
            })
        })

        return data8
    }, data8)
    // console.log(ProductData8);
    await browser.close()
    return ProductData8;

};
module.exports = { scrapeChannel8 }

// scrapeChannel(url);

