import React from 'react';
import { connect } from 'react-redux';
import {    BrightOverlay,
            ItemPreviewContainer,
            SectionContainer,
            ItemNameText,
            DetailItemContainer,
            VerticalLine,
            PriceContainer,
            PriceText,
            AddCartButton,
            AddCartButtonContainer,
            ProductLink
        } 
        from './item-preview.styles';
import { RupiahFormat } from '../../utils/utils';
import { addItem } from '../../redux/cart/cart.actions';

const ItemPreview = ({ payload, addItem}) => {
    const {imageUrl, name, size, price, id} = payload
    return (
        <ItemPreviewContainer >
            <SectionContainer size={size}>
                <img src={imageUrl} alt={name} width='100%' height='100%'/>
                <BrightOverlay>
                    <AddCartButtonContainer>
                        <AddCartButton inverse onClick={() => addItem(payload)} >
                            Add to Cart
                        </AddCartButton>
                    </AddCartButtonContainer>
                </BrightOverlay>
            </SectionContainer>
            <DetailItemContainer>
                <ProductLink to={`product/${id}`}>
                    <ItemNameText>
                        {name}
                    </ItemNameText>
                </ProductLink>
                <PriceContainer>
                    <VerticalLine/>
                    <PriceText>{RupiahFormat(price)}</PriceText>
                </PriceContainer>
            </DetailItemContainer>
        </ItemPreviewContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(ItemPreview);