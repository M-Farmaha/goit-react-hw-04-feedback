import * as Styled from './styled';
import PropTypes from 'prop-types';

export const Extension = ({ options }) => {
  return (
    Object.keys(options).length < 4 && (
      <Styled.ExtentionText>
        Extension: try to add any "key: number" to state object and check the
        result!
      </Styled.ExtentionText>
    )
  );
};

Extension.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
};
