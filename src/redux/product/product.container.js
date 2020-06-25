import ProductDetail from "../../components/product-detail/product-detail.component";
import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCategoriesLoaded} from "../shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => selectIsCategoriesLoaded(state)
});

const ProductDetailContainer= compose(
    connect(mapStateToProps),
    WithSpinner
)(ProductDetail);

export default ProductDetailContainer