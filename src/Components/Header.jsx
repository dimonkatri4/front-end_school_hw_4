import React from 'react';
import styled from "styled-components";
import Title from "./Title";
import ToggleTheme from "./ToggleTheme";
import Flex from "./Flex";

const StyledHeader = styled.div`
width: 100%;
`

const Header = (props) => {
    return (
        <StyledHeader>
            <Flex align='center' margin='10px' justify='space-evenly'>
            <Title/>
            <ToggleTheme onChange={props.toggleTheme} checked={props.isChecked}/>
            </Flex>
        </StyledHeader>
    );
};

export default Header;