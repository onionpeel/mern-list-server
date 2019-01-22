import {GET_PRODUCTS, GET_ONE_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from './../actions/types';

const initialState = {
  inventory: [],
  name: '',
  description: '',
  quantity: '',
  _id: ''
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, {inventory: action.inventory});
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
        inventory: [action.payload, ...state.inventory]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        inventory: state.inventory.filter(product => product._id !== action.payload)
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        inventory: [action.payload, ...state.inventory],
        name: action.payload.name,
        description: action.payload.description,
        quantity: action.payload.quantity
      };
    default:
      return state;
  }
};

export default productReducer;
