import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {StylesProvider} from '@material-ui/core/styles';
import Icon from "../components/icon";

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 32px;
    padding-bottom: 64px;
`
const StyledPaper = styled(Paper)`
    padding: 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Headline3 = styled.h3`
    margin: 16px 0;
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
`
const GridColumn = styled.div`
    grid-column-end: span 12;

    @media (min-width: 900px) {
        grid-column-end: span 4;
    }
`
const Caption = styled.p`
    font-size: 16px;
    margin-bottom: 0;
`

const CardSection = () => {
    return(
        <Section>
            <StylesProvider injectFirst>
            <StyledContainer maxWidth="lg">
                <GridWrapper>
                    <GridColumn>
                        <StyledPaper elevation={3}>
                            <Icon name="goal" width="48px" height="48px"/>
                            <Headline3>Build your startup based on your purpose</Headline3>
                            <Caption>Get people not only to buy what you do but also why you do it.</Caption>
                        </StyledPaper>
                    </GridColumn>
                    <GridColumn>
                        <StyledPaper elevation={3}>
                            <Icon name="build" width="48px" height="48px"/>
                            <Headline3>Create a prototype in just a week</Headline3>
                            <Caption>Get people not only to buy what you do but also why you do it.</Caption>
                        </StyledPaper>
                    </GridColumn>
                    <GridColumn>
                        <StyledPaper elevation={3}>
                            <Icon name="grow" width="48px" height="48px"/>
                            <Headline3>Grow your business with performance marketing</Headline3>
                            <Caption>Get people not only to buy what you do but also why you do it.</Caption>
                        </StyledPaper>
                    </GridColumn>
                </GridWrapper>
            </StyledContainer>
            </StylesProvider>
        </Section>
    )   
}

export default CardSection