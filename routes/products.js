// import express from 'express'
// import Products from '../models/products.js'

// const router = express.Router()

// router.get('/', async (req, res) => {
//   const data = await Products.find()
//   res.send({ message: 'Products fetched successfully!', data })
// })

// router.post('/addProduct', async (req, res) => {
//   const data = req.body
//   await Products.create(data)
//   res.send({ message: 'Product added successfully!' })
// })

// export default router


/*
fetch('http://localhost:3001/products/addProduct', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: 'Wow',
        description: 'test',
        price: 50
    })
}).then(res => res.json())
.then(res => console.log(res))

*/

import express from 'express';

import { client } from './../mongodb.mjs'
import { ObjectId } from 'mongodb'

const db = client.db("mern-project");
const col = db.collection("products");

let router = express.Router()


router.post('/addProduct', async (req, res, next) => {
    console.log('products!', new Date());

    if (
       

        !req.body.title
        || !req.body.description
        || !req.body.price
        || !req.body.image
    ) {
        res.status(403);
        res.send(`required parameters missing, 
        example request body:
        {
            title: "abc post title",
            description: "some post text",
            price: 123
        } `);
        return;
    }

    try {
        const insertResponse = await col.insertOne({
            // _id: "7864972364724b4h2b4jhgh42",
            // id: req.body.id,
            title: req.body.title,
            text: req.body.description,
            price: req.body.price,
            image: req.body.image,


            createdOn: new Date()
        });
        console.log("insertResponse: ", insertResponse);

        res.send('product created');
    } catch (e) {
        console.log("error inserting mongodb: ", e);
        res.status(500).send('server error, please try later');
    }
})

router.get('/:id', async (req, res) => {
    try {
      const productId = req.params.id;
  
      // Check if the provided ID is a valid MongoDB ObjectId
      if (!ObjectId.isValid(productId)) {
        return res.status(400).send("Invalid product ID format");
      }
  
      // Find a product by its _id
      const product = await col.findOne({ _id: new ObjectId(productId) });
  
      if (!product) {
        return res.status(404).send("Product not found");
      }
  
      // Return the product as JSON
      res.status(200).send(product);
    } catch (error) {
      console.error("Error fetching product by ID: ", error);
      res.status(500).send("Server error, please try again later");
    }
  });


router.get('/', async (req, res, next) => {

    const cursor = col.find({})
        .sort({ _id: -1 })
        .limit(100);

    try {
        let results = await cursor.toArray()
        console.log("results: ", results);
        res.send(results);
    } catch (e) {
        console.log("error getting data mongodb: ", e);
        res.status(500).send('server error, please try later');
    }
})


export default router