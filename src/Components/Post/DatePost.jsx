import React from 'react';
import styled from "styled-components";

const StyledDataPost = styled.div`
font-size:13px;
padding: 5px;
font-style: italic;
`

const DatePost = (props) => {
    return (
        <StyledDataPost>
            {props.date}
        </StyledDataPost>
    );
};

export default DatePost;