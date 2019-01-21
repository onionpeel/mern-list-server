const {Product} = require('./../../models/Product');
const {ObjectID} = require('mongodb');

//This is the data used to seed the test database
const products = [
  {
    name: 'Fake product #1',
    quantity: "10",
    description: "Tasty fake product",
    _id: new ObjectID()
  },
  {
    name: 'Fake product #2',
    quantity: "20",
    description: "Deliciouls fake product",
    _id: new ObjectID()
  }
];

//This will populate the Product collection so it only contains data from the
//products array from above.
const populateProducts = async () => {
  try {
    await Product.deleteMany({});

    const productOne = new Product(products[0]).save();
    const productTwo = new Product(products[1]).save();

    await Promise.all([productOne, productTwo]);
  } catch (e) {
    console.log(e);
  };
};

module.exports = {products, populateProducts};
