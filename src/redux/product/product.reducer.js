import ShopActionTypes from './product.types';

const INITIAL_STATE = {
    categories : null,
    isFetching: false,
    errorMessage: null
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_PRODUCT_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                isFetching: false
            }
        case ShopActionTypes.FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default productReducer;