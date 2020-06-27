import ProductDetail from "../../components/product-detail/product-detail.component";
import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {selectIsFetching} from "./product.selectors";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
});

const ProductDetailContainer= compose(
    connect(mapStateToProps),
    WithSpinner
)(ProductDetail);

export default ProductDetailContainer