import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertProductSnapshotToMap } from '../../firebase/firebase.utils';

import ShopActionTypes from './product.types';
import { fetchProductsFailure, fetchProductsSuccess } from './product.actions';

export function* fetchProductsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const categoriesMap = yield call(convertProductSnapshotToMap, snapshot);
        yield put(fetchProductsSuccess(categoriesMap));
    } catch(error) {

        yield put(fetchProductsFailure(error.message))
    }
}

export function* fetchProductsStart() {
    yield takeLatest(ShopActionTypes.FETCH_PRODUCT_START, fetchProductsAsync);
}

export function* productSagas() {
    yield all([
        call(fetchProductsStart)
    ]);
}