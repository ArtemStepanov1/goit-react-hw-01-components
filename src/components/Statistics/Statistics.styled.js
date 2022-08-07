import styled from 'styled-components';
import { getStatsCount } from './Statistics';

let statsQuantity = getStatsCount();
// let statsQuantity = "5";

// export const Section = styled.section`
//   width: 40vw;
//   margin: 0 auto;
//   margin-top: 40px;
//   border-radius: 4px;
//   background-color: white;
//   box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
//     rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
// `;

export const Title = styled.h2`
    padding: ${p => p.theme.space[4]}px;
    text-align: center;
    font-weight:${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
    background-color: ${p => p.theme.colors.background};
    border-radius: 4px 4px 0 0;

    margin-block: 0;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    
    padding-inline-start: 0;
    margin-block: 0;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100% / ${statsQuantity});
    padding: ${p => p.theme.space[3]}px;
    background-color: ${props => props.backgroundColor};
    border-top: ${p => p.theme.borders.normalGrey};
    border-bottom: ${p => p.theme.borders.none};
    &:not(:last-child) {
    border-right: ${p => p.theme.borders.normalGrey};
    } 
    &:first-child {
        border-radius: 0 0 0 5px;
    }
    &:last-child {
        border-radius: 0 0 5px 0;
    }
`;

export const StatLabel = styled.span`
    font-size: ${p => p.theme.fontSizes.xs};
`;

export const StatPercentage = styled.span`
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.8;
`;