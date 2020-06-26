import React from 'react';
import { ProductDetailContainer,
         ProductImage,
         ProductText,
         ProductName,
         ProductPrice,
         Size,
         ProductDes
} from './product-detail.styles';
import {connect} from "react-redux";
import IncrementButton from "../increment-button/increment-button.component";
import {MediumBlockContainer} from "../checkout-item/checkout-item.styles";
import {AddCartButton} from "../item-preview/item-preview.styles";
import {selectProductDetail} from "../../redux/product/product.selectors";

const ProductDetail = ({item, addItem, removeItemFromCart}) => {
    const {imageUrl, name, price, quantity, description, size} = item
    return(
        <ProductDetailContainer>
            <ProductImage>
                <img src={imageUrl} alt={name} width='100%' height='100%'/>
            </ProductImage>
            <ProductText>
                <ProductName>
                    {name}
                </ProductName>
                <ProductPrice>
                    {price}
                </ProductPrice>
                <Size>
                    {size}
                </Size>
                <ProductDes>
                    {description}
                </ProductDes>
                <MediumBlockContainer>
                    <IncrementButton
                        item={item}
                        quantity={quantity}
                        handleIncrement = {() => addItem(item)}
                        handleDecrement = {() => removeItemFromCart(item)}
                    />
                </MediumBlockContainer>
                <AddCartButton inverse onClick={() => addItem(item)} >
                    Add to Cart
                </AddCartButton>
            </ProductText>
        </ProductDetailContainer>
    )
}
const mapStateToProps = (state, ownProps) => ({
    productItems: selectProductDetail(ownProps.match.params.Id)(state)
})

export default connect(mapStateToProps)(ProductDetail);