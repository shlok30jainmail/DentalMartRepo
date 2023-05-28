const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data13 = {
    list13: []
}

const scrapeChannel13 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData13 = await page.evaluate(async (data13) => {
        const items = document.querySelectorAll('#content > div.products-category > div.products-list.row.nopadding-xs > div')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            const name = item.querySelector('#content > div.products-category > div.products-list.row.nopadding-xs > div> div > div.right-block > h4 > a') && item.querySelector('#content > div.products-category > div.products-list.row.nopadding-xs > div> div > div.right-block > h4 > a').innerText;
            const link = item.querySelector('#content > div.products-category > div.products-list.row.nopadding-xs > div> div > div.right-block > h4 > a') && item.querySelector('#content > div.products-category > div.products-list.row.nopadding-xs > div> div > div.right-block > h4 > a').href;

            const price = item.querySelector('#content > div.products-category > div.products-list.row.nopadding-xs > div> div > div.right-block > div.price > span.price-new') && item.querySelector('#content > div.products-category > div.products-list.row.nopadding-xs > div> div > div.right-block > div.price > span.price-new').innerText;
            const image = item.querySelector('#content > div.products-category > div.products-list.row.nopadding-xs > div> div > div.left-block > div.product-image-container > a>img') && item.querySelector('#content > div.products-category > div.products-list.row.nopadding-xs > div> div > div.left-block > div.product-image-container > a>img').src;
            data13.list13.push({
                name: name,
                price: price,
                image: image,
                link:link
            })
        })

        return data13
    }, data13)
    // console.log(ProductData13);
    await browser.close()
    return ProductData13;

};
module.exports = { scrapeChannel13 }

// scrapeChannel(url);

