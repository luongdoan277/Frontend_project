import styled, {css} from 'styled-components';

import CustomStyles from '../custom-styles/custom-styles';
import {Link} from "react-router-dom";

export const DefaultSectionContainerWidth = css`
    width: 24%;
`;

export const Zoom = css`
    cursor: pointer;
    &:hover img {
        transform: scale(1.2);
    }  
`;

export const LargeSectionContainerWidth = css`
    width: 49%;
    img {
        filter: grayscale(100%);
    }
`;

const SectionWidth = props => {
    if (props.size === 'large') {
        return LargeSectionContainerWidth;
    }
    return DefaultSectionContainerWidth;
}
const ZoomSectionContainer = props => {
    if (props.zoom) {
        return Zoom;
    }
}
export const CategoryContainer = styled.div`
    margin: 0 auto;
    padding: 40px 30px;
`;

export const HomeCategoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const SectionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
`;
export const CategoryLink = styled(Link)`
    ${SectionWidth}
    ${ZoomSectionContainer}
`;

export const TitleText = styled.p`
    font-size: 50px;
    color: ${CustomStyles.primaryColor};
    font-family: ${CustomStyles.secondaryFontText};

`;