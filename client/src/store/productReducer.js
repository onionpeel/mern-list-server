import {GET_PRODUCTS, GET_ONE_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from './../actions/types';

const initialState = {
  products: [],
  name: '',
  description: '',
  quantity: '',
  _id: ''
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, {products: action.products});
    case GET_ONE_PRODUCT:
      return Object.assign({}, state, {
        name: action.name,
        description: action.description,
        quantity: action.quantity,
        _id: action._id
      });
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload)
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
        name: action.payload.name,
        description: action.payload.description,
        quantity: action.payload.quantity
      };
    default:
      return state;
  }
};

export default productReducer;
