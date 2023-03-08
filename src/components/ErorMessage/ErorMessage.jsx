import { StyledError } from './ErorMessage.styled'
import PropTypes from 'prop-types';

export function ErorMessage({text, name}) {
    return (
        <StyledError>{ text } '{name}'  ;)</StyledError>
        )
}

ErorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
};