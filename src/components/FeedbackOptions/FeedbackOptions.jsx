import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styles';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Container>
      {options.map(item => {
        return (
          <Button
            key={item}
            type="button"
            onClick={onLeaveFeedback}
            name={item}
          >
            {item}
          </Button>
        );
      })}
    </Container>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
