import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.h1`
font-size: 30px;
font-weight: 900;
`

const Title = (props) => {
    return (
        <StyledTitle {...props} >
            Styled Components
        </StyledTitle>
    );
};

export default Title;