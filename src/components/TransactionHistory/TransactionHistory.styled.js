import styled from 'styled-components';

export const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
`;

export const TableHead = styled.thead`
    background-color: ${p => p.theme.colors.tableHead};
    color: ${p => p.theme.colors.white};
`;

export const TableRow = styled.tr`
    &:nth-child(odd) {
        background-color: ${p => p.theme.colors.white};
    }
    &:nth-child(even) {
        background-color: ${p => p.theme.colors.background};
}
`;

export const TableData = styled.td`
    padding: ${p => p.theme.space[4]}px;
    text-align: center;
    text-transform: capitalize;
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.gray};
    &:not(:last-child) {
    border-right: 1px solid lightgrey;
    }
`;

export const RowHead = styled.th`
    padding: ${p => p.theme.space[4]}px;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
`;