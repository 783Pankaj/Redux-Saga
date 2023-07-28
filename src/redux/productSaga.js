import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constaent';

function* getProducts() {
    let data = yield fetch('https://dummyjson.com/products');
    data = yield data.json();
    data=data.products
    console.log("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}

function* serachProduct(data) {
    let result = yield fetch(`https://dummyjson.com/products?q=${data.query}`);
    result = yield result.json();
     result=result.products
    console.log("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}


function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, serachProduct)
}

export default productSaga;