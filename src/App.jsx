import React, {useState} from 'react'
import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import {darkTheme, lightTheme} from "./themes";
import Header from "./Components/Header";
import Content from "./Components/Content";

function App() {
    const StyledApp = styled.div`
        text-align: center;
        background-color: ${({theme}) => theme.backgroundColor};
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        color: ${({theme}) => theme.textColor};
  `
    const [theme, setTheme] = useState(lightTheme);
    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
        setIsChecked(!isChecked)
    }
    const [isChecked, setIsChecked] = useState(false);
    return (
        <ThemeProvider theme={theme}>
                <StyledApp>
                    <Header toggleTheme={toggleTheme} isChecked={isChecked}/>
                    <Content/>
                </StyledApp>
        </ThemeProvider>
    );
}

export default App;
