const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data5 = {
    list5: []
}

const scrapeChannel5 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData5 = await page.evaluate(async (data5) => {
        const items = document.querySelectorAll('#facet-main > product-list > div > product-item')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            // const id = item.getAttribute('div[data-id]')
            const name = item.querySelector('#facet-main > product-list > div > product-item > div.product-item__info > div > a.product-item-meta__title') && item.querySelector('#facet-main > product-list > div > product-item > div.product-item__info > div > a.product-item-meta__title').innerText;
            const link = item.querySelector('#facet-main > product-list > div > product-item > div.product-item__info > div > a.product-item-meta__title') && item.querySelector('#facet-main > product-list > div > product-item > div.product-item__info > div > a.product-item-meta__title').href;

            const price = item.querySelector('#facet-main > product-list > div > product-item > div.product-item__info > div > div.product-item-meta__price-list-container > div > span.price.price--highlight') && item.querySelector('#facet-main > product-list > div > product-item > div.product-item__info > div > div.product-item-meta__price-list-container > div > span.price.price--highlight').innerText;
            const image = item.querySelector('#facet-main > product-list > div > product-item> div.product-item__image-wrapper > a > img') && item.querySelector('#facet-main > product-list > div > product-item> div.product-item__image-wrapper > a > img').src;
            data5.list5.push({
                name: name,
                price: price,
                image: image,
                link:link
            })
        })

        return data5
    }, data5)
    // console.log(ProductData5);
    await browser.close()
    return ProductData5;

};
module.exports = { scrapeChannel5 }

// scrapeChannel(url);

