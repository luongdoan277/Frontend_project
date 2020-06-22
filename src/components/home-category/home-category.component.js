import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    CategoryContainer,
    HomeCategoryContainer,
    TitleText,
    CategoryLink,
}  from './home-category.styles';
import CategoryItem from '../category-item/category-item.component';

import { selectCategories } from '../../redux/directory/directory.selectors';

const Category = ({sections}) => (
    <CategoryContainer>
        <TitleText>Shop By Categories</TitleText>
        <HomeCategoryContainer>
            {sections.map(({title, id, imageUrl, size, match}) => (
                <CategoryLink size={size} to={`${match}/${title.toLowerCase()}`} zoom>
                    <CategoryItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                </CategoryLink>
            ))}
        </HomeCategoryContainer>
    </CategoryContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectCategories
})

export default connect(mapStateToProps)(Category);