import React from 'react';
import PropTypes from 'prop-types';

export function Notifications({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
