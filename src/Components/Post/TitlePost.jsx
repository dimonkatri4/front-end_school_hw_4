import React from 'react';
import styled from "styled-components";

const StyledTitlePost = styled.a`
color: ${({theme}) => theme.linkColor};
cursor: pointer;
font-size: 23px;
font-weight: 700;
`

const TitlePost = (props) => {
    return (
        <StyledTitlePost {...props}>
            {props.title}
        </StyledTitlePost>
    );
};

export default TitlePost;