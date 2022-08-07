import styled from 'styled-components';

export const Description = styled.div`
    display: block;
    text-align: center;
`;

export const Avatar = styled.img`
    width: 14vw;
    margin-top: 4vw;
`;

export const Username = styled.p`
    color: ${p => p.theme.colors.text};
    margin-top: ${p => p.theme.space[5]};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
`;

export const Info = styled.p`
    color: ${p => p.theme.colors.secondary};
    font-size: ${p => p.theme.fontSizes.s};
`;

export const Stats = styled.ul`
    margin-top: 12%;
    display: flex;
    background-color: ${p => p.theme.colors.background};
    border-radius: 0 0 5px 5px;

    margin-block: 0;
    padding-inline-start: 0;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100% / 3);
    padding: ${p => p.theme.space[3]}px;
    border-top: ${p => p.theme.borders.normalGrey};
    border-bottom: ${p => p.theme.borders.none};
    &:not(:last-child) {
    border-right: ${p => p.theme.borders.normalGrey};
    }       
`;

export const Label = styled.span`
    color: ${p => p.theme.colors.secondary};
    font-size: ${p => p.theme.fontSizes.xs};
`;

export const Quantity = styled.span`
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.8;
`;