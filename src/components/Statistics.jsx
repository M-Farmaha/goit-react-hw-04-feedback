import * as Styled from './styled';
import { Notification } from './Notification';
import PropTypes from 'prop-types';

export const Statistics = ({ total, children }) => (
  <>
    <Styled.StatisticTitle>Statistics</Styled.StatisticTitle>
    {total() === 0 ? <Notification message="There is no feedback" /> : children}
  </>
);

Statistics.propTypes = {
  total: PropTypes.func.isRequired,
};
