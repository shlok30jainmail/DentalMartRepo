const puppeteer = require('puppeteer');

// const url = 'https://www.youtube.com/@SonyMusicIndia';

const data3 = {
    list3: []
}

const scrapeChannel3 = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        timeout: 0,
        waitUntil: "networkidle0"
    })
    console.log("Scraping started")
    const ProductData3 = await page.evaluate(async (data3) => {
        const items = document.querySelectorAll('#layer-product-list > div > div.products.wrapper.grid.columns4.products-grid > ol > li')
        items.forEach((item, index) => {
            console.log(`Scraping data for product : ${index}`)
            // const id = item.getAttribute('div[data-id]')
            const name = item.querySelector('#layer-product-list > div > div.products.wrapper.grid.columns4.products-grid > ol > li> div > div.product.details.product-item-details > strong > a') && item.querySelector('#layer-product-list > div > div.products.wrapper.grid.columns4.products-grid > ol > li> div > div.product.details.product-item-details > strong > a').innerText;
            const price = item.querySelector('#layer-product-list > div > div.products.wrapper.grid.columns4.products-grid > ol > li > div > div.product.details.product-item-details > div.price-box.price-final_price') && item.querySelector('#layer-product-list > div > div.products.wrapper.grid.columns4.products-grid > ol > li > div > div.product.details.product-item-details > div.price-box.price-final_price').innerText;
            const link = item.querySelectorAll('#layer-product-list > div > div.products.wrapper.grid.columns4.products-grid > ol > li > div > div.product.details.product-item-details > strong > a.product-item-link') && item.querySelector('#layer-product-list > div > div.products.wrapper.grid.columns4.products-grid > ol > li > div > div.product.details.product-item-details > strong > a.product-item-link').href;
            const image = item.querySelector('#layer-product-list > div > div.products.wrapper.grid.columns4.products-grid > ol > li > div > div.product.photo.product-item-photo > a > img') && item.querySelector('#layer-product-list > div > div.products.wrapper.grid.columns4.products-grid > ol > li > div > div.product.photo.product-item-photo > a > img').src;
            data3.list3.push({
                name: name,
                price: price,
                image: image,
                link:link
            })
        })

        return data3
    }, data3)
    // console.log(ProductData3);
    await browser.close()
    return ProductData3;
    
};
module.exports = { scrapeChannel3 }

// scrapeChannel(url);

