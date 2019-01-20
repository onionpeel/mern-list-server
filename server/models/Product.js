const {mongoose} = require('./../db/mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  quantity: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = {Product};
