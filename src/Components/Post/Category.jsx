import React from 'react';
import styled from "styled-components";

const StyledCategory = styled.div`
font-size:14px;
font-weight: 700;
padding: 0 0 10px 5px;
`

const Category = (props) => {
    return (
        <StyledCategory>
            Category: {props.category}
        </StyledCategory>
    );
};

export default Category;