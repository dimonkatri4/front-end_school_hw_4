import React from 'react';
import styled from "styled-components";

const StyledBody = styled.div`
font-size: 18px;
`

const BodyPost = (props) => {
    return (
        <StyledBody>
            {props.body}
        </StyledBody>
    );
};

export default BodyPost;