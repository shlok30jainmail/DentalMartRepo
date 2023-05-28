//express seerver?
const express = require('express')
const bodyPaser=require('body-parser')
const mongoose = require('mongoose')
const axios =require('axios')
const fs=require('fs')


const Data =require('./Model/data.js')




const info={
    lists:[]
}

// const  scrapeChannel = require('./scrapper.js')

const myScrapers1 = require('./scrapper');
const myScrapers2 = require('./scrapper2');
const myScrapers3 = require('./scrapper3');
const myScrapers4 = require('./scrapper4');
const myScrapers5 = require('./scrapper5');
const myScrapers6 = require('./scrapper6');
const myScrapers7 = require('./scrapper7');
const myScrapers8 = require('./scrapper8');
const myScrapers9 = require('./scrapper9');
const myScrapers10 = require('./scrapper10');
const myScrapers11 = require('./scrapper11');
const myScrapers12 = require('./scrapper12');
const myScrapers13 = require('./scrapper13');
// console.log(myScrapers)

const app = express()
const port=3000

// const connect = async () => {
//     try {
//         mongoose.connect("mongodb+srv://Kunal_Rathore:Kunal%4020@cluster0.6spjrhx.mongodb.net/webscrap");
//         console.log("Connect to mongobd");
//     } catch (error) {
//         throw error;
//     }
// };


app.use(bodyPaser.json())
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
    next()
})

app.get('/creators', function async (req, res) {
    // res.send('Hello World')
    const creators = [
        { name:localStorage.getItem('name'),
        img:localStorage.getItem('img') },
    ]
    res.send(creators)
})
app.post ('/creators', async(req, res)=> {
    // res.send('Hello World')

    console.log(req.body.product)
    const url1 =`https://dentalstall.com/?s=${req.body.product}&post_type=product&type_aws=true`;
    const Data1=await myScrapers1.scrapeChannel1(url1)
    // const url2 ="https://pinkblue.in/catalogsearch/result/?q="+req.body.product;
    // const Data2=await myScrapers2.scrapeChannel2(url2)
    // const url3 ="https://www.libraltraders.com/catalogsearch/result/?q="+req.body.product;
    // const Data3=await myScrapers3.scrapeChannel3(url3)
    // const url4 ="https://www.medikabazaar.com/catalogsearch/result/?q="+req.body.product;
    // const Data4=await myScrapers4.scrapeChannel4(url4)
    // const url5 ="https://daantwale.com/search?q="+req.body.product;
    // const Data5=await myScrapers5.scrapeChannel5(url5)
    // const url6 =`https://www.dentalworldofficial.com/?s=${req.body.product}&post_type=product`;
    // const Data6=await myScrapers6.scrapeChannel6(url6)
    // const url7 = `https://amplemeds.com/?s=${req.body.product}&post_type=product&post_type=product`;
    // const Data7=await myScrapers7.scrapeChannel7(url7)
    // const url8 = `https://www.mydentalstock.com/catalogsearch/result/?q=${req.body.product}`;
    // const Data8=await myScrapers8.scrapeChannel8(url8)
    // const url9 = `https://www.greenguava.in/search-products?q=${req.body.product}`;
    // const Data9=await myScrapers9.scrapeChannel9(url9)
    // const url10 = `https://www.thedentaldealer.com/index.php?route=product/search&search=${req.body.product}&description=true`;
    // const Data10=await myScrapers10.scrapeChannel10(url10)
    // const url11 = `https://www.dentaltix.com/en/search-results?keyword=${req.body.product}`;
    // const Data11=await myScrapers11.scrapeChannel11(url11)
    // const url12 = `https://dentalprod.com/search?options%5Bprefix%5D=last&q=${req.body.product}`;
    // const Data12=await myScrapers12.scrapeChannel12(url12)
    // const url13 = `https://dentalbasket.in/index.php?category_id=0&search=${req.body.product}&submit_search=&route=product%2Fsearch`;
    // const Data13=await myScrapers13.scrapeChannel13(url13)
    // console.log(channelData)   
    // const name=channelData.list.name;
    // const img=channelData.list.img;

    // const newData = new Data({
    //     name,
    //     img
    // })
    // // await newData.save();
    // res.json(
    //     {
    //        name: name,
    //         img:img
    //     }
    // )
    
    const responseData = {Data1};

    res.send(responseData);

})
app.post('/creator2', async (req, res) => {
    // res.send('Hello World')

    console.log(req.body.product)
    const url2 ="https://pinkblue.in/catalogsearch/result/?q="+req.body.product;
    const Data2=await myScrapers2.scrapeChannel2(url2)

    const responseData = { Data2 };

    res.send(responseData);

})
app.post('/creator3', async (req, res) => {
    console.log(req.body.product)
    const url3 ="https://www.libraltraders.com/catalogsearch/result/?q="+req.body.product;
    const Data3=await myScrapers3.scrapeChannel3(url3)
    const responseData = { Data3 };
    res.send(responseData)
})
app.post('/creator4', async (req, res) => {
    console.log(req.body.product)
    const url4 ="https://www.medikabazaar.com/catalogsearch/result/?q="+req.body.product;
    const Data4=await myScrapers4.scrapeChannel4(url4)
    const responseData = { Data4 };
    res.send(responseData)
})
app.post('/creator5', async (req, res) => {
    console.log(req.body.product)
    const url5 ="https://daantwale.com/search?q="+req.body.product;
    const Data5=await myScrapers5.scrapeChannel5(url5)
    const responseData = { Data5 };
    res.send(responseData)
})
app.post('/creator6', async (req, res) => {
    console.log(req.body.product)
    const url6 =`https://www.dentalworldofficial.com/?s=${req.body.product}&post_type=product`;
    const Data6=await myScrapers6.scrapeChannel6(url6)
    const responseData = { Data6 };
    res.send(responseData)
})
app.post('/creator7', async (req, res) => {
    console.log(req.body.product)
    const url7 = `https://amplemeds.com/?s=${req.body.product}&post_type=product&post_type=product`;
    const Data7=await myScrapers7.scrapeChannel7(url7)
    const responseData = { Data7 };
    res.send(responseData)
})
app.post('/creator8', async (req, res) => {
    console.log(req.body.product)
    const url8 = `https://www.mydentalstock.com/catalogsearch/result/?q=${req.body.product}`;
    const Data8=await myScrapers8.scrapeChannel8(url8)
    const responseData = { Data8 };
    res.send(responseData)
})
app.post('/creator9', async (req, res) => {
    console.log(req.body.product)
    const url9 = `https://www.greenguava.in/search-products?q=${req.body.product}`;
    const Data9=await myScrapers9.scrapeChannel9(url9)
    const responseData = { Data9 };
    res.send(responseData)
})
app.post('/creator10', async (req, res) => {
    console.log(req.body.product)
    const url10 = `https://www.thedentaldealer.com/index.php?route=product/search&search=${req.body.product}&description=true`;
    const Data10=await myScrapers10.scrapeChannel10(url10)
    const responseData = { Data10 };
    res.send(responseData)
})
app.post('/creator11', async (req, res) => {
    console.log(req.body.product)
    const url11 = `https://www.dentaltix.com/en/search-results?keyword=${req.body.product}`;
    const Data11=await myScrapers11.scrapeChannel11(url11)
    const responseData = { Data11 };
    res.send(responseData)
})
app.post('/creator12', async (req, res) => {
    console.log(req.body.product)
    const url12 = `https://dentalprod.com/search?options%5Bprefix%5D=last&q=${req.body.product}`;
    const Data12=await myScrapers12.scrapeChannel12(url12)
    const responseData = { Data12 };
    res.send(responseData)
})
app.post('/creator13', async (req, res) => {
    console.log(req.body.product)
    const url13 = `https://dentalbasket.in/index.php?category_id=0&search=${req.body.product}&submit_search=&route=product%2Fsearch`;
    const Data13=await myScrapers13.scrapeChannel13(url13)
    const responseData = { Data13 };
    res.send(responseData)
})





app.listen(port,()=>{
    // connect();
    console.log(`Example app listening on port ${port}!`)
})