import React, { Component } from 'react';
import styled from 'styled-components';

const DottedBox = styled.div`
    border: dotted 5px black;
    padding: 10px;
    font-size: ${(props)=>props.fontSize};
    ${props => props.underline && `
        text-decoration: underline;
    `}
    &:hover {
        background-color: green;
    }
`;

class App extends Component {
    render() {
        const isBlue = false;
    return (
        <div>
            <DottedBox>HELLO</DottedBox>
        </div>
    );
    }
}

export default App;
