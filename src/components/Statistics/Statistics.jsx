import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item } from 'components/Statistics/Statistics.styled';

export function Statistics({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) {
  return (
    <Container>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>itemositive feedback: {countPositiveFeedbackPercentage}%</Item>
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
