const expect = require('chai').expect;
const request = require('supertest');
const app = require('./../server');
const {Product} = require('./../models/Product');
const {products, populateProducts} = require('./seed/seed');

beforeEach(populateProducts);

describe('POST /api/products/detail', function() {
  it('should create a new product', async function() {
    const name = "Sample Product";
    const quantity = "50";
    const description = 'Some type of product';

    try{
      await request(app)
        .post('/api/products/detail')
        .send({name, quantity, description})
        .expect(200)
        .expect(res => {
          expect(res.body.name).to.equal(name);
          expect(res.body.quantity).to.equal(quantity);
          expect(res.body.description).to.equal(description)
        });

      const products = await Product.find({name, quantity, description});
      expect(products.length).to.equal(1);
      expect(products[0].name).to.equal(name);
    }catch(e) {
      throw e;
    };
  });
});

describe('GET /api/products/list', function() {
  it('should return all the products', async function() {
    try{
      await request(app)
        .get('/api/products/list')
        .expect(200)
        .expect(res => {
          expect(res.body.data.length).to.equal(2)
        })
    }catch(e) {
      throw e;
    }
  });
});

describe('DELETE /api/products/detail/:id', function() {
  it('should delete the specified product', async function() {
    try{
      const id = products[0]._id.toHexString();
      const name = products[0].name;

      await request(app)
        .delete(`/api/products/detail/${id}`)
        .expect(200)
        .expect(res => {
          expect(res.body.name).to.equal(name);
        });

      const productsList = await Product.find();
      expect(productsList.length).to.equal(1);
    }catch(e) {
      throw e;
    }
  });
});

describe('PATCH /api/products/detail/:id', function () {
  it('should update the specified product', async function() {
    try{
      const id = products[0]._id.toHexString();
      const name = "Sample Product";
      const productQuantity = products[0].quantity;

      await request(app)
        .patch(`/api/products/detail/${id}`)
        .send({name})
        .expect(200)
        .expect(res => {
          expect(res.body.name).to.equal(name);
        });

        const productsList = await Product.find();
        expect(productsList[0].quantity).to.equal(productQuantity);
    } catch(e) {
        throw e;
    };
  });
});
