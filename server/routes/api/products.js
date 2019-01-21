const express = require('express');
const router = express.Router();

const {Product} = require('./../../models/Product');

//Add a product
router.post('/detail', async (req, res) => {
  try{
    const product = new Product({
      name: req.body.name,
      quantity: req.body.quantity,
      description: req.body.description
    })

    let newProduct = await product.save();
    res.send(newProduct);
  } catch(e) {
    res.status(400).send();
  };
});

//Retrieve all products
router.get('/list', async (req, res) => {
  try {
    let products = await Product.find({});
    res.send({
      data: products.map(item => {
        return {_id: item._id, name: item.name}
      })
    });
  } catch(e) {
    res.status(400).send();
  };
});

//Retrieve one product by its id
router.get('/detail/:id', async (req, res) => {
  try {
    const item = await Product.findOne({_id: req.params.id});
    if (item === undefined) {
      throw new Error;
    } else {
      res.send(item);
    };
  } catch(e) {
    res.sendStatus(404);
  };
});

//Delete one product by its id
router.delete('/detail/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({_id: req.params.id});
    if (deletedProduct === undefined) {
      throw new Error;
    } else {
      res.send(deletedProduct);
    };
  } catch(e) {
    res.sendStatus(404);
  };
});

router.patch('/detail/:id', async (req, res) => {
  try {
    const body = req.body;
    const updatedProduct = await Product.findByIdAndUpdate({_id: req.params.id}, {$set: body}, {new: true});
    if (!updatedProduct) {
      return res.status(404).send();
    };
    res.send(updatedProduct);
  } catch(e) {
    res.status(400).send();
  };
});

module.exports = router;
