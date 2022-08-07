import { Box } from '../Box';
import data from '../Data/data.json'
import { PropTypes } from 'prop-types';
import {
    Title,
    StatList,
    StatItem,
    StatLabel,
    StatPercentage,
} from './Statistics.styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Statistics = ({title, stats}) => {
    return (
        <Box 
        width="40vw"
        mx="auto"
        bg="white"
        borderRadius="4px"
        boxShadow="rgb(0 0 0 / 20%) 0px 3px 1px -2px,
            rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px"
        mb="16px"
        as="section">
            {title && <Title>Upload stats</Title>}

            <StatList>
                {stats.map(({id, label, percentage}) => (
                <StatItem key={id} backgroundColor={getRandomHexColor()}>
                    <StatLabel>{label}</StatLabel>
                    <StatPercentage>{percentage}%</StatPercentage>
                </StatItem>
                )) }
            </StatList>
        </Box>
    )
}

export function getStatsCount() {
    const quantity = Object.keys(data).length;
    return quantity;
  }

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};