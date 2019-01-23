import {GET_PRODUCTS, GET_ONE_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from './types';
import axios from 'axios';

export const getProducts = () => dispatch => {
  axios.get(`/api/products/list`)
    .then(res => {
      dispatch({type: GET_PRODUCTS, products: res.data.data});
    });
};

export const getOneProduct = (_id) => dispatch => {
  axios.get(`/api/products/detail/${_id}`)
    .then(res => {
      dispatch({
        type: GET_ONE_PRODUCT,
        name: res.data.name,
        description: res.data.description,
        quantity: res.data.quantity,
        _id: _id
      })
  });
};

export const addProduct = product => dispatch => {
  axios.post(`/api/products/detail`, product)
    .then(res => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    });
};

export const deleteProduct = _id => dispatch => {
  axios.delete(`/api/products/detail/${_id}`)
    .then(res => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: _id
      })
    })
};

export const updateProduct = (updatedProduct, id) => dispatch => {
  axios({
    method: 'patch',
    url: `/api/products/detail/${id}`,
    data: updatedProduct
  })
  .then(res => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data
    })
  });
};
