import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {DefaultContainer} from "../shop/shop.styles";
import ProductDetailContainer from "../../redux/product/product.container";
import {fetchProductsStart} from "../../redux/product/product.actions";

const ProductPage = ({ match, fetchProductsStart } ) => {

    useEffect(() => {
        fetchProductsStart();
    }, [fetchProductsStart]);

    return (
        <DefaultContainer>
            <Route exact path={`/${match.path}/:itemId`} component={ProductDetailContainer} />
        </DefaultContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchProductsStart: () => dispatch(fetchProductsStart())
});

export default connect(null, mapDispatchToProps)(ProductPage);