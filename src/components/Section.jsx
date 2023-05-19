import * as Styled from './styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <Styled.Section>
    <Styled.Title>{title}</Styled.Title>
    {children}
  </Styled.Section>
);

Section.propTypes = {
  title: PropTypes.string,
};
