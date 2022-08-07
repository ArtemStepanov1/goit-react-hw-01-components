import { Box } from "theme-ui"
import { PropTypes } from 'prop-types';

import {
    Table,
    TableHead,
    RowHead,
    TableRow,
    TableData,
  } from './TransactionHistory.styled';
  

export const TransactionHistory = ({transactions}) => {
    return (
        <Box as="section">
            <Table>
                <TableHead>
                    <tr>
                        <RowHead>Type</RowHead>
                        <RowHead>Amount</RowHead>
                        <RowHead>Currency</RowHead>
                    </tr>
                </TableHead>
                <tbody>
                    {transactions.map(({id, type, amount, currency}) => (
                    <TableRow key={id}>
                        <TableData>{type}</TableData>
                        <TableData>{amount}</TableData>
                        <TableData>{currency}</TableData>
                    </TableRow>
                    ))}
                </tbody>
            </Table> 
        </Box>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};