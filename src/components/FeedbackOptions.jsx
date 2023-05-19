import * as Styled from './styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Styled.FeedbackOptions>
    {Object.keys(options).map(el => (
      <li key={el}>
        <Styled.Button type={el} onClick={onLeaveFeedback}>
          {el}
        </Styled.Button>
      </li>
    ))}
  </Styled.FeedbackOptions>
);

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
