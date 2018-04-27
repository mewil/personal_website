import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { devices } from '../../styles';
import theme from '../../styles/theme.js';

const Wrapper = styled.div`
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    zIndex: 98;
`;

const Container = styled.div`
    height: 100%;
    width: calc(100% - 60px);
    maxWidth: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${devices.tablet`
        width: calc(100% - 100px);
    `} ${devices.desktop`
        width: calc(100% - 140px);
    `} ${devices.giant`
        width: calc(100% - 160px);
    `};
`;

const Text = styled.h2`
    fontSize: 30px;
    color: ${theme.primary};
    text-align: center;
    fontWeight: 500;
    textAlign: center;
    padding: 0 10vw;
    margin: 5px 0;

    ${devices.tablet`
        fontSize: 50px;
    `};
`;

class Landing extends React.Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <Text>Contact</Text>
                </Container>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme.data
    };
};

export default connect(mapStateToProps)(Landing);
