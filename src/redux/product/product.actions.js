import ShopActionTypes from './product.types';

export const fetchProductsStart = () => ({
    type: ShopActionTypes.FETCH_PRODUCT_START
});

export const fetchProductsSuccess = (category) => ({
    type: ShopActionTypes.FETCH_PRODUCT_SUCCESS,
    payload: category
});

export const fetchProductsFailure = (errorMsg) => ({
    type: ShopActionTypes.FETCH_PRODUCT_FAILURE,
    payload: errorMsg
});