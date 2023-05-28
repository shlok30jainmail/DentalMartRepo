const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data11 = {
    list11: []
}

const scrapeChannel11 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData11 = await page.evaluate(async (data11) => {
        const items = document.querySelectorAll('#block-system-main > div > div > div > div:nth-child(2) > div > div > div > div.block-inner.clearfix > div > div > div > div > ul > li> div > span > div')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            const name = item.querySelector('#block-system-main > div > div > div > div > div > div > div > div.block-inner.clearfix > div > div > div > div > ul > li> div > span > div > article > div > div.field.field-name-title-field.field-type-text.field-label-hidden') && item.querySelector('#block-system-main > div > div > div > div > div > div > div > div.block-inner.clearfix > div > div > div > div > ul > li> div > span > div > article > div > div.field.field-name-title-field.field-type-text.field-label-hidden').innerText;
            const link = item.querySelector('#block-system-main > div > div > div > div > div > div > div > div.block-inner.clearfix > div > div > div > div > ul > li> div > span > div > article > div > div.field.field-name-title-field.field-type-text.field-label-hidden') && item.querySelector('#block-system-main > div > div > div > div > div > div > div > div.block-inner.clearfix > div > div > div > div > ul > li> div > span > div > article > div > div.field.field-name-title-field.field-type-text.field-label-hidden').href;

            const price = item.querySelector('#block-system-main > div > div > div > div > div > div > div > div.block-inner.clearfix > div > div > div > div > ul > li > div > span > div > article > div > div.commerce-product-field.commerce-product-field-commerce-price.field-commerce-price.node-18755-product-commerce-price > div > table > tbody > tr.even > td.webprice-total') && item.querySelector('#block-system-main > div > div > div > div > div > div > div > div.block-inner.clearfix > div > div > div > div > ul > li > div > span > div > article > div > div.commerce-product-field.commerce-product-field-commerce-price.field-commerce-price.node-18755-product-commerce-price > div > table > tbody > tr.even > td.webprice-total').innerText;
            const image = item.querySelector('#block-system-main > div > div > div > div> div > div > div > div.block-inner.clearfix > div > div > div > div > ul > li> div > span > div > article > div > div.commerce-product-field.commerce-product-field-field-images.field-field-images.node-18755-product-field-images > div > a > img') && item.querySelector('#block-system-main > div > div > div > div> div > div > div > div.block-inner.clearfix > div > div > div > div > ul > li> div > span > div > article > div > div.commerce-product-field.commerce-product-field-field-images.field-field-images.node-18755-product-field-images > div > a > img').src;
            data11.list11.push({
                name: name,
                price: price,
                image: image,
                link:link
            })
        })

        return data11
    }, data11)
    // console.log(ProductData11);
    await browser.close()
    return ProductData11;

};
module.exports = { scrapeChannel11 }

// scrapeChannel(url);

