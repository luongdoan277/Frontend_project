import { createSelector } from 'reselect';

const selectProduct = state => state.product;

export const selectProducts = createSelector(
    [selectProduct],
    product => product.item
);

export const selectProductDetail = productUrlParam => createSelector(
    [selectProducts],
    item => item[productUrlParam]
);

export const selectProductForPreview = createSelector(
    [selectProducts],
    item => item ? Object.keys(item).map(key => item[key]) : []
);

export const selectIsFetching = createSelector(
    [selectProduct],
    product => product.isFetching
);

export const selectIsProductsLoaded = createSelector(
    [selectProduct],
    product => (!Boolean(product.item))
);