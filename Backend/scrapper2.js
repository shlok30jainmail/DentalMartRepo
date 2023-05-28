const puppeteer = require('puppeteer');
const fs = require('fs/promises')


// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data2 = {
    list2: []
}

const scrapeChannel2 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData = await page.evaluate(async (data2) => {
        const items = document.querySelectorAll('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.columns4.products-grid > ol > li.item.product.product-item')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            // const id = item.getAttribute('div[data-id]')
            const name = item.querySelector('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.columns4.products-grid > ol > li.item.product.product-item> div > div.product.details.product-item-details > strong > a') && item.querySelector('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.columns4.products-grid > ol > li.item.product.product-item> div > div.product.details.product-item-details > strong > a').innerText;
            const price = item.querySelector('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.columns4.products-grid > ol > li.item.product.product-item> div > div.product.details.product-item-details > div.price-box.price-final_price > div > span > span > span.price-wrapper > span') && item.querySelector('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.columns4.products-grid > ol > li.item.product.product-item> div > div.product.details.product-item-details > div.price-box.price-final_price > div > span > span > span.price-wrapper > span').innerText;
            const link = item.querySelector('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.columns4.products-grid > ol > li.item.product.product-item> div > div.product.details.product-item-details > strong > a') && item.querySelector('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.columns4.products-grid > ol > li.item.product.product-item> div > div.product.details.product-item-details > strong > a').href;
            const image = item.querySelector('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.columns4.products-grid > ol > li > div > div> a > img.product-image-photo.default_image') && item.querySelector('#maincontent > div.columns > div.column.main > div.search.results > div.products.wrapper.grid.columns4.products-grid > ol > li > div > div> a > img.product-image-photo.default_image').src;
            data2.list2.push({
                name: name,
                price: price,
                image: image,
                link:link
            })
        })

        return data2
    }, data2)

    // ProductData.list1.forEach(el => {
    //     console.log(el.name)
    // })
    // console.log(ProductData.list1[0].image)
    // console.log(`Successfully scraped ${ProductData.list1.length} products`)
    // const json = JSON.stringify(ProductData)
    // fs.writeFile('product2.json', json, 'utf-8', () => {
    //     console.log('done')
    // })

    await browser.close()
    return ProductData;
}
module.exports = { scrapeChannel2 }

// scrapeChannel(url);

