import * as Styled from './styled';
import PropTypes from 'prop-types';

export const StatisticsList = ({ options, total, positivePercentage }) => (
  <>
    {Object.entries(options).map(el => (
      <Styled.StatisticItem key={el[0]}>
        {el[0]}: {el[1]}
      </Styled.StatisticItem>
    ))}
    <Styled.StatisticTotal>Total: {total()}</Styled.StatisticTotal>
    <Styled.StatisticPercentage>
      Positive feedback: {positivePercentage()}%
    </Styled.StatisticPercentage>
  </>
);

StatisticsList.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
