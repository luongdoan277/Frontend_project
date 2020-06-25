import ShopActionTypes from './product.types';

export const fetchProductsStart = () => ({
    type: ShopActionTypes.FETCH_PRODUCT_START
});

export const fetchProductsSuccess = (item) => ({
    type: ShopActionTypes.FETCH_PRODUCT_SUCCESS,
    payload: item
});

export const fetchProductsFailure = (errorMsg) => ({
    type: ShopActionTypes.FETCH_PRODUCT_FAILURE,
    payload: errorMsg
});