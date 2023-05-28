const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data9 = {
    list9: []
}

const scrapeChannel9 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData9 = await page.evaluate(async (data9) => {
        const items = document.querySelectorAll('body > div.theme-content-area.theme-search-page-contianer > div > div > div > div > div > div > div > div > div > div.zprow.theme-product-ratio.theme-store-style-collection-row-03 > div')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            const name = item.querySelector('body > div.theme-content-area.theme-search-page-contianer > div > div > div > div > div > div > div > div > div > div.zprow.theme-product-ratio.theme-store-style-collection-row-03 > div > div > div.theme-prod-box-content.theme-prod-name') && item.querySelector('body > div.theme-content-area.theme-search-page-contianer > div > div > div > div > div > div > div > div > div > div.zprow.theme-product-ratio.theme-store-style-collection-row-03 > div > div > div.theme-prod-box-content.theme-prod-name').innerText;
            const link = item.querySelector('body > div.theme-content-area.theme-search-page-contianer > div > div > div > div > div > div > div > div > div > div.zprow.theme-product-ratio.theme-store-style-collection-row-03 > div > div > div.theme-prod-box-content.theme-prod-name') && item.querySelector('body > div.theme-content-area.theme-search-page-contianer > div > div > div > div > div > div > div > div > div > div.zprow.theme-product-ratio.theme-store-style-collection-row-03 > div > div > div.theme-prod-box-content.theme-prod-name').href;

            const price = item.querySelector('body > div.theme-content-area.theme-search-page-contianer > div > div > div > div > div > div > div > div > div > div.zprow.theme-product-ratio.theme-store-style-collection-row-03 > div > div > div.theme-prod-price-and-addcart > div > span:nth-child(1)') && item.querySelector('body > div.theme-content-area.theme-search-page-contianer > div > div > div > div > div > div > div > div > div > div.zprow.theme-product-ratio.theme-store-style-collection-row-03 > div > div > div.theme-prod-price-and-addcart > div > span:nth-child(1)').innerText;
            const image = item.querySelector('body > div.theme-content-area.theme-search-page-contianer > div > div > div > div > div > div > div > div > div > div.zprow.theme-product-ratio.theme-store-style-collection-row-03 > div > div > div.theme-prod-box-content.theme-prod-img.theme-ribbon-prod-box > div.theme-prod-img-container > picture > img') && item.querySelector('body > div.theme-content-area.theme-search-page-contianer > div > div > div > div > div > div > div > div > div > div.zprow.theme-product-ratio.theme-store-style-collection-row-03 > div > div > div.theme-prod-box-content.theme-prod-img.theme-ribbon-prod-box > div.theme-prod-img-container > picture > img').src;
            data9.list9.push({
                name: name,
                price: price,
                image: image,
                link: link
            })
        })

        return data9
    }, data9)
    // console.log(ProductData9);
    await browser.close()
    return ProductData9;

};
module.exports = { scrapeChannel9 }

// scrapeChannel(url);

